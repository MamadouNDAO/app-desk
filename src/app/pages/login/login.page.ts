import {Component, OnInit, Injector, ChangeDetectorRef, HostListener} from '@angular/core';
import {ModalController, NavController} from '@ionic/angular';
// import { GeneralFunctions } from 'src/app/services/general-functions';
import { ApiService } from '../../serviceApp/api.service';
import {BasePage} from "../../base";
import { Observable } from 'rxjs';
import { Profile } from 'src/model/profile';
import themered from "../../themered";
import themegreen from "../../themegreen";
import {WebviewComponent} from "../../webview/webview.component";
import {Environment} from "@angular/cli/lib/config/workspace-schema";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage extends BasePage implements OnInit {
  @HostListener('window:hashchange', ['$event'])
  whiteColor = '#FFF';
  // whiteColor = GeneralFunctions.ligthColor;
  email:any= "";
  password: any = '';
  isdesabled: boolean = false;
  public isUserLogged$: boolean;
  public infosUser$: Profile;
  routerlink = '../tabs/tab1';
  //newPass = '1V1pl@y2!';
  //newPass2 = 'iViPlay2023!';
  hide = false;
  show = false;
  choosenColor$: string;
  imgIcon: string = 'succes'
  msgPopup: string = ''
  isPopup: boolean = false
  themeView: string = ''
  isSSO: boolean = environment.activeSSO
  domaineSCI: string[] = ['letrot', 'france-galop', 'fnch', 'orpesc', 'lescourseshippiques'];
  domainePMU: string[] = ['pmu'];
  bgImage = 'fond-blanc'
  borderColor = 'border-red'
  webView: any;
  constructor(injector: Injector,
    // private AuthService: SecurityService,
    private api: ApiService,
    private route:NavController,
    private chg: ChangeDetectorRef,
    private modalController: ModalController
  ) {
    super(injector);
  }

  ngOnInit() {
    console.log(this.theme.color)
    switch (this.theme.color) {
      case 'ivi-red':
        this.bgImage = 'sci-fond'
        break;
      case 'ivi-green':
        this.bgImage = 'pmu-fond'
        break;
      default: this.bgImage = 'fond-blanc'
    }
    /*this.stateService.selectedInfoUser().subscribe((data) => {
      let host = data.email.split('@')[1]
      this.choosenColor$ = host
    });

    this.stateService.selectIslogged()
      .subscribe((data) => {
      this.isUserLogged$ = data
      //console.log(data,'countttt');
    })

    this.stateService.selectedInfoUser()
      .subscribe((data) => {
      this.infosUser$ = data
    })*/
  }

  isLoading(){
    this.loadingService.present('connexion')

  }

  login(){
    this.isLoading()

    let data ={email: this.email, plainPassword: this.password}
    let host = this.email.split('@')[1]

    if(this.isSSO) {
      this.api.getUrlSSO(data).subscribe(
        resp => {
          if (resp != '""') {
            window.open(resp, '_blank')
            const interval = setInterval(() => {
              let tokenId = localStorage.getItem('tokenId')
              if(tokenId) {
                this.loadingService.dismiss()
                //Info user
                this.api.infoUser(tokenId).subscribe(
                  async resp => {
                    host = resp.user.organization.domain
                    this.stateService.setuserInfos(resp.user)
                    this.stateService.userLogger(true)
                    localStorage.setItem('isUserlogged', 'logged')
                    localStorage.setItem('userId', resp.user.id)
                    setTimeout(() => {
                      this.actionConnect(host)
                    }, 2000)
                    //
                  }
                )

                clearInterval(interval);
              }
            }, 2000)

          }else {
            this.isSSO = false
            this.loadingService.dismiss()
            //this.loginClassic(data, host)
          }
        }
      )
    }else{
      this.loginClassic(data, host)
    }

}

  loginClassic(data: any, host: string) {
    this.api.login(data).subscribe(
      response =>{

        if(response.user){
          host = response.user.organization.domain
          this.stateService.userLogger(true)
          this.stateService.setuserInfos(response.user)
          localStorage.setItem('isUserlogged', 'logged')
          localStorage.setItem('userToken', response.token)
          localStorage.setItem('userId', response.user.id)
          this.loadingService.dismiss()
          this.actionConnect(host)

        }
      },
      error => {
        this.loadingService.dismiss()
        console.log(error.error.message)
        this.imgIcon = "error"
        this.msgPopup = error.error.message
        this.isPopup = true
      }
    )
  }

  actionConnect(host: string, ) {
    let url;
    if(this.domainePMU.includes(host)) {
      localStorage.setItem('theme', 'green')
      this.theme = themegreen
      url = '/fil_actualites'
    }else if(this.domaineSCI.includes(host)){
      localStorage.setItem('theme', 'red')
      this.theme = themered
      url = '/fil_actualites'
    }else{
      url = '/login'
    }
    this.refresh()
    this.loadingService.dismiss()
    this.chg.detectChanges()
    location.href = url;
  }



  logout(){
    this.stateService.userLogger(false)
    localStorage.clear()
    window.location.reload()
  }

  goto(page: string) {
    this.router.navigate([page])
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
