import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthService: BasicAuthenticationService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();

    if (basicAuthHeaderString && username) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString,
        },
      });
    }
    return next.handle(req);
  }
}
