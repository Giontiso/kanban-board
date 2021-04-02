import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CrudService} from "../../services/crud.service";

import {Card} from "../cards/cards.component";



@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ColumnComponent implements OnInit{

  // @Input() cards: Card[] = [{}]
  // @Output() onAdd: EventEmitter<Card> = new EventEmitter<Card>()
  @Input() cards: Card[] = [{}]

  constructor(private crudService: CrudService, private cd: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.getCards();
  }

  // cards: Card[] = [];

  getCards(): void {
    this.crudService.getData("cards").subscribe(value => {
      this.cards = value as unknown as Card[];
      this.cd.detectChanges();
      console.log(value);
    });
  }

  deleteCard(id: string): void {
    // this.cards = this.cards.filter((card) => card.id !== id)
    this.crudService.deleteEntity("cards", id).subscribe(value => {
      this.getCards();
    })
  }

  addCard(card: Card = {}): void {
    // const newCard: Card = {}
    // this.onAdd.emit(card)
    // this.cards.unshift(card)
    // this.crudService.getData("cards").subscribe(value => console.log(value));
    // this.cards = [...this.cards, card]
    this.crudService.createEntity("cards", {name: "task"}).subscribe(() => {
      this.getCards();
    })
  }



}
