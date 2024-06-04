import {Component, Injector, OnInit} from '@angular/core';
import {BasePage} from "../../base";
import {AlertController, IonInput, LoadingController, NavController} from "@ionic/angular";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../serviceApp/api.service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage extends BasePage implements OnInit {
  email: any;
  formInscription: FormGroup
  iconPass = "eye"
  imgIcon: string = 'succes'
  msgPopup: string = ''
  isPopup: boolean = false
  constructor(injector: Injector,
              private route:NavController,
              private api: ApiService,
              private loadingCtrl: LoadingController,
              private alertController: AlertController,
              ) {super(injector); }

  ngOnInit() {
    this.initForm()
  }

  initForm() {
    this.formInscription = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  goto(page: string) {
    this.router.navigate([page])
  }

  showPassword(pass: IonInput) {
    switch (pass.type) {
      case 'password':
        this.iconPass = 'eye-off'
        pass.type = 'text'
        break;
      case 'text':
        this.iconPass = 'eye'
        pass.type = 'password'
        break
    }
  }

  async onSubmit() {
    if (this.formInscription.valid) {
      const loading = await this.loadingCtrl.create({message: 'Veuillez patienter...'});
      await loading.present();
      let data = this.formInscription.value
      console.log(data)
      this.api.inscription(data).subscribe(
        resp => {
          loading.dismiss()
          console.log(resp)
          this.imgIcon = 'succes'
          this.msgPopup = 'Vous êtes inscrit(e) avec succè!'
          this.isPopup = true
        },
        error => {
          loading.dismiss()
          this.imgIcon = 'erreur'
          this.msgPopup = "Erreur lors de l'inscription! <br> Veuillez réessayer."
          this.isPopup = true
          //this.presentAlert('Erreur!\n\r Veuillez réessayer.' )
        }
      )
    }
  }

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  closePopup(imgIcon: string) {
    switch (imgIcon) {
      case 'error': this.isPopup = false
        break;
      case 'succes':
        this.isPopup = false
        this.router.navigate(['login'])
        break;
    }
  }
}
