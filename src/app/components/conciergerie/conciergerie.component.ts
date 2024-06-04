import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, createAnimation } from '@ionic/angular';
import { ConciergerieService } from './conciergerie.service';

@Component({
  selector: 'app-conciergerie',
  templateUrl: './conciergerie.component.html',
  styleUrls: ['./conciergerie.component.scss'],
})
export class ConciergerieComponent  implements OnInit {

  conciergerieServicesList:any=[];
  conciergerieServicesModules:any=[];
  conciergerieServicesModulesList:any=[];
  showServices:boolean = true;
  showServicesModules:boolean = false;
  showServicesModulesList:boolean = false;
  currentModule:any;
  currentServiceModule:any;
  currentService:any;
  bottomSheetHeight:string;
  conciergerieTable= [];
  currentDate: Date = new Date()

  public subtitle: string;

  constructor(private conciergeireService : ConciergerieService,public alertController: AlertController, private router: Router) { }

  getServiceListModules(service){
    // console.log('servicess', service);
    this.subtitle= service.name;
    // ---s
    this.showServices = false;
    this.showServicesModules = true;
    this.conciergerieServicesModules = service.modules;
    this.currentService = service;
  }

  getServiceListModulesList(module){
    // console.log('servicess', module);
    this.subtitle= module.name;

    this.showServices = false;
    this.showServicesModules = false;
    this.showServicesModulesList = true;
    this.conciergerieServicesModulesList = module.modules;
    this.currentServiceModule = module;
  }

  backToServiceListModules(){
    this.showServices = false;
    this.showServicesModules = true;
    this.showServicesModulesList = false
    this.closeBottomSheet();
  }

  backToServiceList(){
    this.showServices = true;
    this.showServicesModules = false;
    this.showServicesModulesList = false
    this.closeBottomSheet();
  }

  async conciergerieAlert() {
    const alert = await this.alertController.create({
      header: 'Votre demande',
      subHeader: '',
      message:'Je suis interéssé par '+ this.currentService.name + ' : ' + this.currentServiceModule.name + ' : ' + this.currentModule.name ,
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            //this.successAlert()
            this.redirectToHistorique()
          }
        },
      ]
    });
    localStorage.setItem("conciergerie",JSON.stringify(this.conciergerieTable))
    //console.log("conciergerieTable", this.conciergerieTable);

    console.log(this.currentModule);

    await alert.present();
    if((<HTMLStyleElement>document.querySelector(".alert-head"))){
      (<HTMLStyleElement>document.querySelector(".alert-title")).style.fontSize='17px';
      (<HTMLStyleElement>document.querySelector(".alert-message")).style.fontSize='15px';
    }
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Conciergerie',
      subHeader: '',
      message:'Votre demande a bien été prise en compte ',
      buttons: [
        {
          text: 'Ok',
        },
      ]
    });
    await alert.present();
  }

  redirectToHistorique(){
    this.router.navigate(['/conciergerie/conciergerie-historique']);
  }

  openBottomSheet(module){
    this.currentModule = module;

    let conciergerieDated= {
      ...module,
      date: this.currentDate,
      buy: false
    }
    this.conciergerieTable.push(conciergerieDated);

    //localStorage.setItem('conciergerie',JSON.stringify(this.conciergerieTable))

    this.bottomSheetHeight = '40%';

    (<HTMLStyleElement>document.querySelector("#conciergerieBottomSheet")).style.display ="block";
    const animation = createAnimation()
    .addElement(document.querySelector("#conciergerieBottomSheet"))
    .easing("ease-in-out")
    .duration(400)
    .direction("alternate")
    .keyframes([
      { height: "0px", transform: "scale(1)", opacity: "1",},
      { height: this.bottomSheetHeight , transform: "scale(1)", opacity: "1" },
    ]);
    animation.play();
  }

  closeBottomSheet(){
    const animation = createAnimation()
    .addElement(document.querySelector("#conciergerieBottomSheet"))
    .easing("ease-in-out")
    .duration(400)
    .direction("alternate")
    .keyframes([
      { height: this.bottomSheetHeight ,},
      { height:  "0px", opacity: "0"},
    ]);
    animation.play();
  }

  ngOnInit() {
    this.conciergerieServicesList = this.conciergeireService.getConciergerieServices();

  }

}
