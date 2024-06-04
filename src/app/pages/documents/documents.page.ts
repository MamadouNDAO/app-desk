import { Component, Injector, OnInit } from '@angular/core';
import { BasePage } from 'src/app/base';
import { IprodDoc } from 'src/model/room';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage extends BasePage implements OnInit {

  docs: IprodDoc[]=[]
  constructor(injector: Injector) { super(injector) }

  ngOnInit() {
    this.getDoc()
  }

  getDoc(){
    this.apiService.get('/api/v1/document/').subscribe(resp =>{

      this.docs = resp;
     // console.log(resp);

    })
  }

}
