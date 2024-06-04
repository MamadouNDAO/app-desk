import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-webview',
  templateUrl: './webview.component.html',
  styleUrls: ['./webview.component.scss'],
})
export class WebviewComponent  implements OnInit {
  @Input() url: string;
  safeUrl: SafeResourceUrl;
  constructor(private modalController: ModalController, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
