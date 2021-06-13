import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEvent } from './event.interface';
import { EventService } from './event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  title:string="My Organisation Event"
  isDisable:boolean=false;
  events:IEvent[] = [];
  errorMessage:string=''

  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _cardService:EventService){
  }

  ngOnInit(): void {
    this._cardService.getAllEvent().subscribe({
      next:(data)=>this.events=data,
      error:(error) => this.errorMessage=error
    });
  }
}