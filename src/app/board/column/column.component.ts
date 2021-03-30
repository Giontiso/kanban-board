import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {Card} from "../board.component";

export interface Card {

}

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})

export class ColumnComponent implements OnInit{

  // @Input() cards: Card[] = [{}]
  // @Output() onAdd: EventEmitter<Card> = new EventEmitter<Card>()

  constructor() { }

  ngOnInit(): void {
  }

  cards: Card[] = [
      {},
      {}
    ]

  addCard(card: Card) {
    // const newCard: Card = {}
    // this.onAdd.emit(card)
    this.cards.unshift(card)
  }


}
