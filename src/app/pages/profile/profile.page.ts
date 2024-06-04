import {Component, Injector, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {BasePage} from "../../base";
import {Router} from "@angular/router";
import themegreen from "../../themegreen";
import {Profile} from "../../../model/profile";
import {ApiService} from "../../serviceApp/api.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage extends BasePage implements OnInit {

  whiteColor = '#FFF';
  // whiteColor = GeneralFunctions.ligthColor;
  email:any= "";
  password: any = '';
  isdesabled: boolean = false;
  public isUserLogged$: boolean;
  public infosUser$: Profile
  routerlink = '../tabs/tab1';
  newPass = '1V1pl@y2!';
  newPass2 = 'iViPlay2023!';
  hide = false;
  show = false;
  choosenColor$: string;
  name: string = ''

  constructor(injector: Injector,
              public override router: Router,
              // private AuthService: SecurityService,
              //private route:NavController,
              private api: ApiService
  ) {
    super(injector);
  }

  ngOnInit() {
    let token = localStorage.getItem("userToken")
    if(!token){
      this.router.navigate(['/login'])
    }
    this.stateService.selectedInfoUser().subscribe(
      resp => {

        this.infosUser$ = resp

      }
    )

  }

  isLoading(){
    this.loadingService.present('connexion')
  }

  logout(){
    this.stateService.userLogger(false)
    this.router.navigate([`/login`])

    //window.location.reload()
    //this.theme = themegreen
    localStorage.clear()
    //window.location.reload()
  }

  desisncription() {
    this.loadingService.present('Veuillez patienter...')
    this.api.desinscription().subscribe(
      resp => {
        localStorage.clear()
        this.router.navigate([`/login`])
        this.stateService.userLogger(false)
        this.loadingService.dismiss()
      }
    )
  }

}
