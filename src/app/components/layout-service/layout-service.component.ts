import {ChangeDetectorRef, Component, Injector, Input, OnInit} from '@angular/core';
import {BasePage} from "../../base";
import {Observable} from "rxjs";
import {logIn} from "ionicons/icons";
import {ApiService} from "../../serviceApp/api.service";
import themegreen from "../../themegreen";
import themered from "../../themered";

interface ModelService {
  id: string,
  label: string
  icon_desk: string,
  key: string,
  serviceUrl: string | null,
  roles: any
}
@Component({
  selector: 'app-layout-service',
  templateUrl: './layout-service.component.html',
  styleUrls: ['./layout-service.component.scss'],
})
export class LayoutServiceComponent extends BasePage implements OnInit {
  @Input() showMenu: boolean = true;
  @Input() showCard: boolean = true;
  @Input() showCard2: boolean = true;
  @Input() showSubMenu: boolean = false;
  @Input() bgCard: string = "background: #fff";
  @Input() bgImage = 'sci-fond-blanc'
  menuPMU = [
    {title:'Service', url: '/actualites', icon: 'book' },
  ];
  iss =false
  typeService = ""
  menu = []
  isLogged: boolean = false
  userRole: number
  isPMU: boolean = false
  width60 = ''
  public appPages = [
    {title:'Service', url: '/reservation_espace', icon: 'book' },
    {title:'News', url: '/fil_actualites', icon: 'calendar-clear' },
    {title:'Map' ,url: '/cartographie', icon: 'map' },
  ];

  serviceInformer = [
    {
      id: 'actu',
      label: 'Fil d\'actualité',
      icon_desk: 'calendar-clear-outline',
      key: 'fil_actualites',
      openInNewTab: false,
      serviceUrl: null,
      roles: 1000
    },
    {
      id: 'intranet',
      label: 'Intranet PMU',
      icon_desk: 'at-circle',
      key: 'https://parimutuel.sharepoint.com/sites/intranet',
      openInNewTab: true,
      serviceUrl: null,
      roles: 1000
    },
      {
      id: 'cse',
      label: 'CSE',
      icon_desk: 'man-sharp',
      key: 'https://www.csepmu.fr/com/login?back_url=%2Fcom%2Fhomepage',
      openInNewTab: true,
        serviceUrl: null,
        roles: 1000
    },
    {
      id: 'quartier',
      label: 'Le quartier',
      icon_desk: 'earth-sharp',
      key: 'https://parimutuel.sharepoint.com/sites/EnsembleThmis/SitePages/City-guide.aspx',
      openInNewTab: true,
      serviceUrl: null,
      roles: 1000
    },

  ];
  showinformer: boolean = false;
  titlePmu: boolean = false



  ionItems2 = document.querySelectorAll('ion-item');

  services: ModelService[]

  greenservices = []
  public informerStatus$: Observable<boolean> = this.stateService.getInformerStatus();

  constructor(injector: Injector, private api: ApiService, private chg: ChangeDetectorRef) {
    super(injector);
    if(localStorage.getItem('theme')==='green') {
      this.titlePmu = true
    }else{
      this.titlePmu = false
    }
  }

  ishowinformer(label: any){
    if(label === "/fil_actualites"){

      this.showinformer = true
    }else{
      this.showinformer = false;

    }
  }

  ngOnInit() {
    if(localStorage.getItem("services")){
      this.services = JSON.parse(localStorage.getItem("services"))
    }
    if(this.router.url == '/news' && this.theme.color == 'ivi-red') {
      this.showMenu = false
    }

    if(this.router.url != '/transport'){
      localStorage.removeItem("reload-transport")
    }

    if(this.router.url != '/cartographie' && this.router.url != '/cartographie/mode-reservation'){
      //alert("TEST")
      localStorage.removeItem("modeReservation")
      localStorage.removeItem("finmode")
      localStorage.removeItem("ListRooms")
      localStorage.removeItem("Etages")
    }
    let token = localStorage.getItem("userToken")
    if(!token){
      this.router.navigate(['/login'])
    }
    this.stateService.selectedInfoUser().subscribe(
      resp => {
        this.userRole = resp.role


      }
    )

    if(this.theme.color == 'ivi-red'){
      this.isPMU = false
    }else{
      this.isPMU = true
    }

    switch (this.theme.color) {
      case 'ivi-red':
        this.bgImage = (this.router.url == '/news' || this.router.url == '/cartographie') ?  'sci-fond-md' : 'sci-fond-md-service'
        break;
      case 'ivi-green':
        this.bgImage = (this.router.url == '/profile' || this.router.url == '/parametres') ?  'pmu-fond-green' : 'pmu-fond-blanc'
        this.width60 = (this.router.url == '/profile' || this.router.url == '/parametres') ? 'w60' : ''
        break;
    }
      this.listService()

  }


  test(label: string){
    this.showSubMenu = label == 'informer'
  }

  closeSubMenu(page: string) {
    this.router.navigate([page])
    this.showSubMenu = false
  }

  listService(){
    this.api.listService().subscribe(
      resp => {
        this.services = resp

        if(this.theme.color == 'ivi-green'){
          this.serviceInformer.map(i => {
            this.services.push(i)
            localStorage.setItem("services", JSON.stringify(this.services))
          })
        }


        for (let i = 0; i < this.services.length; i++) {
          if (this.services[i].key === 'mission') {
            this.services.splice(i, 1);
            i--;
          }
        }
        localStorage.setItem("services", JSON.stringify(this.services))

      }
    )
  }

 /* changeTheme() {

    switch (localStorage.getItem('theme')){
      case 'green': this.theme = themegreen
        break;
      case 'red': this.theme = themered
        break
    }
    //window.location.reload()
    this.chg.detectChanges()
  }*/


  protected readonly Object = Object;
}
