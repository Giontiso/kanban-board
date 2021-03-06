import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

// export interface Card {
//
// }

export interface Column {
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {

  constructor(private  firestore: AngularFirestore, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public logOut(): void{
    this.authService.signOut().subscribe(() =>this.router.navigate(['']))
  }

  columns: Column[] = [
    {}
  ]

  addColumn(column: Column){
    this.columns.push(column)
  }
  //
  // cards: Card[] = [
  //   {},
  //   {}
  // ]
  // updateCards(card: Card) {
  //   this.cards.push(card)
  // }
}
