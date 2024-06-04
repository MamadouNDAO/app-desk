import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { createAnimation, NavController } from '@ionic/angular';
import { of } from 'rxjs';
import { PlansMocks } from 'src/mocks/plan.mocks';
import { PlanServiceService } from './plan-service.service';

@Component({
  selector: 'app-plan-locaux',
  templateUrl: './plan-locaux.page.html',
  styleUrls: ['./plan-locaux.page.scss'],
})
export class PlanLocauxPage implements OnInit {

  @Input() inputValue: any;


  plansList: any = [];
  planData: any = [];
  currentPlanDetails: any = [];
  showplans = true;
  showPlansDetails = false;
  allLocations: any = [];
  locations;
  currentPlan;
  plansFoundBackLog: any = [];
  planTitle: string;
  long: any;
  lat: any;
   mylat: any;
   mylong: any;
   center:any;
   zoom: any;

  constructor(private planService: PlanServiceService,
    private planMocks: PlansMocks,
    private navigateController: NavController) { }


     createArray(length) {
      return Array.from({length: length}, (_, i) => i);
    }

    showMap(plan){
      this.mylat = plan.location.lat;
      this.mylong = plan.location.lng;
      this.center = {lat: plan.location.lat, lng: plan.location.lng};
      this.zoom = 12;
      this.openBottomSheet()

    }


    openBottomSheet(){
      (<HTMLStyleElement>document.querySelector("#cartoBottomSheet")).style.display ="block";
      const animation = createAnimation()
        .addElement(document.querySelector("#cartoBottomSheet"))
        .easing("ease-in-out")
        .duration(400)
        .direction("alternate")
        .keyframes([
          { height: "0px", transform: "scale(1)", opacity: "1",},
          { height: "26rem", transform: "scale(1)", opacity: "1" },
        ]);
      animation.play();
    }

    closeBottomSheet(){
      const animation = createAnimation()
      .addElement(document.querySelector("#cartoBottomSheet"))
      .easing("ease-in-out")
      .duration(300)
      .direction("alternate")
      .keyframes([
        { height: "26rem",},
        { height:  "0px", opacity: "0", },
      ]);
      animation.play();
    }


  searchPlan(currentplan) {
    console.log('donées dans console', currentplan);
    this.planTitle = currentplan.label;
    this.currentPlan = currentplan;
    this.planService.googleInit(currentplan.name, this.lat, this.long).subscribe(data => {
      // this.getallLocations(data);

      this.showplans = false;
      this.showPlansDetails = true;
      this.planData = data;
      this.planData.results.map(plan => {
        const planObject = {
          location: plan.geometry.location,
          name: plan.name,
          openingHours: plan.opening_hours,
          adresse: plan.vicinity,
          rating: plan.rating,
          userRatingTotal: plan.user_ratings_total,
          icon: currentplan.icon
        };
        this.currentPlanDetails.push(planObject);
        this.plansFoundBackLog.push(planObject);
      });
    });
  }


  backToplansList() {
    this.showplans = true;
    this.showPlansDetails = false;
    this.currentPlanDetails = [];
    this.plansFoundBackLog = [];
  }

  getallLocations(locations) {
    this.locations = locations.results.map(plan => {
      this.allLocations = plan.geometry.location;
      return this.allLocations;
    });
  }

  redirect(plan?) {
    if (!plan) {
      const map: NavigationExtras = {
        state: {
          locations: this.locations,
          planLabel: this.currentPlan.label,
          allPlansDetails: this.currentPlanDetails
        }
      };

      this.navigateController.navigateForward(['/plan-map'], map);
    } else {
      const map: NavigationExtras = {
        state: {
          location: plan.location,
          planLabel: this.currentPlan.label,
          adresse: plan.adresse,
          icon: plan.icon,
          name: plan.name,
          openingHours: plan.openingHours,
          rating: plan.rating,
          userRtingTotal: plan.userRatingTotal
        }
      };
      this.navigateController.navigateForward(['/plan-map'], map);
    }
  }

  getInputValue(e: Event) {
    const plansFound = [];
    const currentPlans = this.currentPlanDetails;
    if (this.showPlansDetails) {
      currentPlans.forEach(plan => {
        if (plan.name.includes(e) && this.inputValue !== '') {
          plansFound.push(plan);
          this.currentPlanDetails = plansFound;
        } else if (this.inputValue === '') {
          this.currentPlanDetails = this.plansFoundBackLog;
        } else if (e === plan.name) {
          plansFound.push(plan);
          this.currentPlanDetails = plansFound;
        }
      });
    } else {
      this.plansList.forEach(plan => {
        if (plan.name.includes(e) && this.inputValue !== '') {
          plansFound.push(plan);
          this.plansList = plansFound;
        } else if (this.inputValue === '') {
          this.plansList = this.planMocks.getPLans();
        } else if (e === plan.name) {
          plansFound.push(plan);
          this.plansList = plansFound;
        }
      });
    }
  }

  getPosition(){
    navigator.geolocation.getCurrentPosition(resp =>{
      this.lat = resp.coords.latitude;
      this.long =  resp.coords.longitude;

    })

  }

  ngOnInit() {
    this.plansList = this.planMocks.getPLans();
     this.getPosition();
     //this.ratinTb(8)
  }
}
