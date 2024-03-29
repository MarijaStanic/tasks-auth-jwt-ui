import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  constructor(
    private authService: BasicAuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.authService.isUserLoggedIn()) return true;
    this.router.navigate(['login']);
    return false;
  }
}
