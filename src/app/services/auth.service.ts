import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {from, Observable} from "rxjs";
import firebase from "firebase";
import auth = firebase.auth;
import {take, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$: Observable<firebase.User | null>

  constructor(private angAuthService: AngularFireAuth) {
    this.user$ = this.angAuthService.authState;
  }

  public googleSing(): Observable<auth.UserCredential> {
    const provider = new auth.GoogleAuthProvider();
    return from(this.angAuthService.signInWithPopup(provider)).pipe(
      tap((authUser: auth.UserCredential)=> {
        console.log(authUser);
      }),
      take (1)
    )
  }

  public signOut():Observable<void> {
    return from(this.angAuthService.signOut()).pipe(take(1));
  }

}
