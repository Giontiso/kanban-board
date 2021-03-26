import { Injectable } from '@angular/core';
// import {CanActivate} from "@angular/router";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./auth.service";
import {map, take, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.authService.user$.pipe(
      map(value => !!value),
      tap(value => {
        if (!value) {
          console.log('You are not authorized')
        }
      }),
      take(1))

  }
}
