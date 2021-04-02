import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Route, Router} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {CrudService} from "./services/crud.service";
import {subscribeOn} from "rxjs/operators";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor(private  firestore: AngularFirestore, private router: Router, private authService: AuthService, private crudService: CrudService){
  }

  public goTo(): void{

    // this.authService.googleSing().subscribe();
    // this.crudService.createEntity("cards", {name: "Superman"}).subscribe( value => this.crudService.updateObject("cards", value), {'name': 'test2'}).subscribe();
    // this.crudService.createEntity("cards", {name: "Superman"}).subscribe(value => this.crudService.getobjectByRef("cards", value).subscribe(value => console.log(value.data)))
    // this.crudService.createEntity("cards", {name: "Superman"}).subscribe(value => this.crudService.updateObject("cards", value).subscribe(value => console.log(value.data)))
    this.crudService.createEntity("cards", {name: "Superman"}).subscribe(value => console.log(value))
  }


  ngOnInit() {
    // this.firestore.collection("heroes").valueChanges().subscribe(value => console.log(value))
    // this.crudService.getData("cards").subscribe(value => console.log(value));

  }

}
