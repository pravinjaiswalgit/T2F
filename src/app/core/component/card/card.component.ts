import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICard } from './card.interface';
import { CardService } from './card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  title:string="My Card"
  isDisable:boolean=false;
  cards:ICard[] = [];
  errorMessage:string=''


  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _cardService:CardService){
  }

  ngOnInit(): void {
    this._cardService.getAllCardsDetails().subscribe({
      next:(data)=>this.cards=data,
      error:(error) => this.errorMessage=error
    });
  }
}
