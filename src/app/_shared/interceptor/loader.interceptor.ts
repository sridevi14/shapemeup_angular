import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {finalize, switchMap, tap} from 'rxjs/operators'
import { LoadingController } from '@ionic/angular';

/**
 * This class is for intercepting http requests. When a request starts, we set the loadingSub property
 * in the LoadingService to true. Once the request completes and we have a response, set the loadingSub
 * property to false. If an error occurs while servicing the request, set the loadingSub property to false.
 * @class {HttpRequestInterceptor}
 */
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(private loadingController: LoadingController) {
        console.log('loader');
    }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
	if (req.url.indexOf('http') !== 0) {
		return next.handle(req);
	}

	return from(this.loadingController.create())
		.pipe(
			tap((loading) => {
				return loading.present();
			}),
			switchMap((loading) => {
				return next.handle(req).pipe(
					finalize(() => {
						loading.dismiss();
					})
				);
			})
		);
}
}