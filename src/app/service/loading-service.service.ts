import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private loadingController: LoadingController) { }

  async present(message?: string) {
    const loading = await this.loadingController.create({
      message: message || 'Loading...'
    });
    await loading.present();
  }

  async dismiss() {
    await this.loadingController.dismiss();
  }

}
