import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor( private plat: Platform,private router :Router,) {
    this.appInit()
  }

  ngOnInit() {
  }

  appInit(){
    setTimeout(() => {
      this.plat.ready().then(() =>{
        if(localStorage.getItem('isUserlogged')){
         //console.log("it works",this.mysecurity.authState);
        this.router.navigate(['news'])
       }else{
        this.router.navigate(['/login'])

       }
    })
    }, 1000);
  }

}
