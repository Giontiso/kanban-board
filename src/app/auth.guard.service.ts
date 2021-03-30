import { Injectable } from '@angular/core';
// import {CanActivate} from "@angular/router";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {map, take, tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.authService.user$.pipe(
      map(value => !!value),
      tap(value => {
        if (!value) {
          this.router.navigate([''])
        }
      }),
      take(1))

  }



}
