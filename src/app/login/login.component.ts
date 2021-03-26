 import { Component, OnInit } from '@angular/core';
 import {AngularFirestore} from "@angular/fire/firestore";
 import {Router} from "@angular/router";
 import {AuthService} from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private  firestore: AngularFirestore, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public goTo(): void{
    this.authService.googleSing().subscribe(() =>this.router.navigate(['board']));
  }

}
