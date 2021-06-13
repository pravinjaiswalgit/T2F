import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPartnership } from './partnership.interface';
import { PartnershipService } from './partnership.service';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
export class PartnershipComponent implements OnInit {

  title:string="My Partner"
  isDisable:boolean=false;
  partnerships:IPartnership[] = [];
  errorMessage:string=''


  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _cardService:PartnershipService){
  }

  ngOnInit(): void {
    this._cardService.getAllPartnershipDetails().subscribe({
      next:(data)=>this.partnerships=data,
      error:(error) => this.errorMessage=error
    });
  }
}