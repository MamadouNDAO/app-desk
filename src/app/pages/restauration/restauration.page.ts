import {ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../base";
import {RestaurationService} from "../../components/restauration/restaurant.service";
import {Router} from "@angular/router";
import {AlertController} from "@ionic/angular";
import {getElement} from "ionicons/dist/types/stencil-public-runtime";

@Component({
  selector: 'app-restauration',
  templateUrl: './restauration.page.html',
  styleUrls: ['./restauration.page.scss'],
})
export class RestaurationPage extends BasePage implements OnInit {
  title = ""
  restaurantProducts: any;
  showAllProducts=true;
  showCurrentProducts=false;
  currentProductType: any;
  currentProduct: any;
  isBottomSheetOpened = false;
  counter = 1;
  currentProductPrice: number;
  localstorageProduct: any = [];
  constructor(injector: Injector,
              private restaurantService: RestaurationService,
              public override router: Router,
              public alertController: AlertController,
              public cht: ChangeDetectorRef
              ) {
    super(injector);

  }

  ngOnInit() {
    this.title = localStorage.getItem("theme") === "green" ? "Se restaurer" : "Restauration"
    this.restaurantProducts = this.restaurantService.getRestaurantProducts();
    if(localStorage.getItem('restaurationProduct')){
      this.localstorageProduct = JSON.parse(localStorage.getItem('restaurationProduct'));
    }else{
      this.localstorageProduct = [];
    }

    /*this.restaurantService.getRestaurants().subscribe(rest =>{
      console.log('data in console',JSON.parse(rest));

    })*/
  }

  getCurrentProduct(product){
    console.log(product);
    this.currentProductType = product;
    this.showCurrentProducts = true;
    this.showAllProducts = false;

  }
  showAllproductsPage(){
    this.showCurrentProducts = false;
    this.showAllProducts = true;
  }

  goTo(page: string) {
    this.router.navigate([page])
  }


  async detailProduct(item: any) {

    const alert = await this.alertController.create({
      cssClass: 'my-card-detail-product',
    });

    await alert.present();

    const customAlert = alert.querySelector('.alert-wrapper')

    const alertContent= document.createElement('div');
    alert.querySelector('.alert-head').remove()
    alert.querySelector('.alert-message ').remove()


    alertContent.innerHTML=`
    <ion-card style="width: 90%; margin: auto"  class="`+this.theme.family+` `+this.theme.color+` card-detail-prd">
      <div class="detail-prd-title" >`+item.name+`</div>
      <div class="detail-icon-prix">
        <ion-icon  class="`+this.theme.color+`productIcon" name="`+item.icon+`-outline"></ion-icon>
        <span class="productName'">`+item.price+` €</span>
      </div>
      <div class="detail-desc">
        `+item.description+`
      </div>
      <div class="`+this.theme.family+` `+this.theme.color+` detail-counter">
          <ion-icon class="btn-click" rezo="moins" name="remove-circle-outline"></ion-icon>
          <span id="span-counter">`+this.counter+`</span>
          <ion-icon class="btn-click" rezo="plus" name="add-circle-outline"></ion-icon>
      </div>
      <div class="div-btn">
         <button class="`+this.theme.family+` `+this.theme.bg+` btn-me detail-btn">Ajouter au panier</button>
      </div>

    </ion-card>`

    customAlert.appendChild(alertContent);

    const allIcon= alertContent.querySelectorAll(".btn-click");
    for(let i = 0; i < allIcon.length; i++ ){
      let btn = allIcon[i];
      let icon = btn.getAttribute('rezo')
      btn.addEventListener('click',() =>{
        //alert.dismiss();
        //this.dimissModal(rezo)
        switch (icon) {
          case 'plus': this.counterPlus()
            break;
          case 'moins': this.counterMoins()
            break;
        }

      })

    }

  }

  counterPlus() {
    this.counter++
    console.log(this.counter)
    let cnt = document.getElementById('span-counter')
    cnt.innerHTML = String(this.counter)
    this.cht.detectChanges()
  }

  counterMoins() {
    if(this.counter > 1) {
      this.counter--
    }
    console.log(this.counter)
    let cnt = document.getElementById('span-counter')
    cnt.innerHTML = String(this.counter)
    this.cht.detectChanges()
  }

  async dimissModal(social: string) {

    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Message',
      message:` Partagé sur ${social}`,
      buttons: [{
        text: 'Fermer',
        role: 'close',
        cssClass: 'btn-comment',
      }],
    });
    await alert.present();
  }

}
