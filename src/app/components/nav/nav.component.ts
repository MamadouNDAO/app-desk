import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { BasePage } from 'src/app/base';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent extends BasePage implements OnInit {

 private activeAlert = {
    cssClass: 'popup-container',
    header: `Réactivation du Didacticiel`,
    message: '<p class="paraphPopup" style="text-align:center;">Ce mode réactive toutes les <br> pages du didacticiel</p>',
    backdropDismiss: false,
    buttons: [
      {
        text: 'Valider',
        handler: (e) => {
          setTimeout(() => {
            // this.isValidated = true;
            // this.didacticielAlert(this.allMessages);
            // this.act_Didacticiel(true);
            this.stateService.alterDidacticiel(true)

            localStorage.setItem('myDidact-active', 'is_active')

            localStorage.setItem('didactic1', 'dic1')
            localStorage.setItem('didactic2', 'dic2')
            localStorage.setItem('didactic3', 'dic3')
            //this.didacticielNews1()

          }, 1000);
        }
      },
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          // this.activePopup = false;
          // this.isValidated = false;
          // localStorage.removeItem('activeDidacticiel');
        }
      },
    ]
  };

  public isUserLogged$: boolean;
  public choosenColor$: string;
  constructor(injector: Injector,
    private alertController: AlertController,
    private navCtrl: NavController,) {
      super(injector)
      this.stateService.selectedshowDidactiel().subscribe(data =>{
        this.isUserLogged$ = data
       // console.log("rrrrthis.isUserLogged$",this.isUserLogged$);
      });
    }


  async activeDidacticielAlert() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-clas',
      header: 'Le Didacticiel est déjà activé',
      subHeader: '',
      message: '',
      buttons: [
        {
          text: 'Ok',
        },
        {
          text: 'Désactiver',
          handler: () => {

            this.stateService.alterDidacticiel(false);
            //localStorage.clear()
            // this.tabsPage.isValidated = false;
            // this.tabsPage.act_Didacticiel(false)

            // localStorage.removeItem('didactic1')
            // localStorage.removeItem('didactic2')
            // localStorage.removeItem('didactic3')
            // localStorage.removeItem('myDidact-active')

            // localStorage.removeItem('active_gest')
            // localStorage.removeItem('active_trav-colla')
            // localStorage.removeItem('active_mobilite')
            // localStorage.removeItem('active_informations')
            // localStorage.removeItem('active_mission')
            // localStorage.removeItem('active_securite')
            // localStorage.removeItem('active_bien-etre')
            // localStorage.removeItem('active_stats')

            //window.location.reload();
          }
        },
      ]
    });
    await alert.present();
  }

   async activeDidacticiel() {

     console.log("est deja activ",this.isUserLogged$)
    //console.log('yes isValidated', this.tabsPage.isValidated)
    if (this.isUserLogged$) {
      //this.tabsPage.removeRepeatedAlert();
      this.activeDidacticielAlert();
    } else {
      // console.log('NO')
      this.stateService.alterDidacticiel(true)
      this.navCtrl.navigateRoot('/news');
      const alert = await this.alertController.create(this.activeAlert)
      await alert.present()
      // this.tabsPage.activePopups();
      // this.tabsPage.act_Didacticiel()
    }
  }


  ngOnInit() {

    this.stateService.selectedInfoUser().subscribe(data =>{
      let host = data.email.split('@')[1]
      this.choosenColor$ = host
     console.log("host.isUserLogged$", host);
    });
   }

}
