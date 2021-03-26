import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Route, Router} from "@angular/router";
import {AuthService} from "./auth.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private  firestore: AngularFirestore, private router: Router, private authService: AuthService){
  }

  public goTo(): void{
    this.authService.googleSing().subscribe();
  }

  ngOnInit() {
    // this.firestore.collection("heroes").valueChanges().subscribe(value => console.log(value))
  }

  title = 'kanban-board';
}
