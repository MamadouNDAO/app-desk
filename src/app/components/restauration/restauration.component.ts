import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, createAnimation } from '@ionic/angular';
import { RestaurationService } from './restaurant.service';

@Component({
  selector: 'app-restauration',
  templateUrl: './restauration.component.html',
  styleUrls: ['./restauration.component.scss'],
})
export class RestaurationComponent  implements OnInit {

  restaurantProducts: any;
  showAllProducts=true;
  showCurrentProducts=false;
  currentProductType: any;
  currentProduct: any;
  isBottomSheetOpened = false;
  counter = 1;
  currentProductPrice: number;
  localstorageProduct: any = [];


  constructor(
    private restaurantService: RestaurationService,
    private router: Router,
    public alertController: AlertController

  ) { }

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

  refreshPage(){
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  async shoppingAlert(message) {
    const alert = await this.alertController.create({
      header: message,
      cssClass: 'shoppingAlertMessage',
      subHeader: '',
      buttons: [
        {
          text: 'Voir le panier',
          handler: (alertData) => {
            this.redirectToshopping();

          }
        },
        {
          text:'OK',
          cssClass: 'shoppingAlert',
          handler: (alertData) => {
            this.refreshPage();

          }
        }
      ]
    });
    await alert.present();
    // (<HTMLStyleElement>document.querySelector(".alert-title")).style.fontSize="17px";
    // (<HTMLStyleElement>document.querySelector(".alert-title")).style.fontWeight="normal";
    // (<HTMLStyleElement>document.querySelector(".shoppingAlert")).style.fontSize="17px";
    // (<HTMLStyleElement>document.querySelector(".shoppingAlert")).style.fontWeight="normal";

  }

  openBottomSheet(product){
    (<HTMLStyleElement>document.querySelector('#restaurantBottomSheet')).style.display ='block';
    const animation = createAnimation()
    .addElement(document.querySelector('#restaurantBottomSheet'))
    .easing('ease-in-out')
    .duration(400)
    .direction('alternate')
    .keyframes([
      { height: '0px', transform: 'scale(1)', opacity: '1',},
      { height: '20rem', transform: 'scale(1)', opacity: '1' },
    ]);
    animation.play();
    this.currentProduct = product;
  }

  closeBottomSheet(){
    const animation = createAnimation()
    .addElement(document.querySelector('#restaurantBottomSheet'))
    .easing('ease-in-out')
    .duration(100)
    .direction('alternate')
    .keyframes([
      { height: '20rem',},
      { height:  '0px', opacity: '0'},
    ]);
    animation.play();
    this.currentProduct = '';
  }

  addAmount(){
    return this.counter ++;
  }

  redirectToshopping(){
    this.router.navigate(['/restauration/shopping']);
  }

  redirectToHistorique(){
    this.router.navigate(['/restauration/historique-restaurant']);
  }

  remouveAmount(){
    if(this.counter * 1  <= 1){
      return this.counter;
    }else{
      return this.counter --;
    }
  }

  addProduct(currentProduct){
    let productFinalPrice;
    let product;
    productFinalPrice = currentProduct.price * this.counter;
    this.currentProductPrice = productFinalPrice.toFixed(2);
    product =
    {
      id:currentProduct.id,
      name:currentProduct.name,
      amount:this.counter,
      price:this.currentProductPrice,
      productType:this.currentProductType.name
    };
    this.localstorageProduct.push(product);
    localStorage.setItem('restaurationProduct',JSON.stringify( this.localstorageProduct));
    this.shoppingAlert('Produit ajouté');
  }



  ngOnInit() {
    this.restaurantProducts = this.restaurantService.getRestaurantProducts();
    if(localStorage.getItem('restaurationProduct')){
      this.localstorageProduct = JSON.parse(localStorage.getItem('restaurationProduct'));
    }else{
      this.localstorageProduct = [];
    }

    this.restaurantService.getRestaurants().subscribe(rest =>{
        console.log('data in console',JSON.parse(rest));

    })

  }



}
