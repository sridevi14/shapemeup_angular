import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loadingController: LoadingController) { }

  async showLoader(isLoaderVisible) {
    if (isLoaderVisible) {
      return await this.loadingController.create({
        message: 'Loading...'
      }).then((response) => {
        response.present();
      });
    } else {
      this.loadingController.dismiss().then((response) => {
        console.log('Loader closed!', response);
      }).catch((err) => {
        console.log('Error occured : ', err);
      });
    }
  }
}
