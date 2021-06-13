import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrganisationNumber } from './organisation-number.interface';
import { OrganisationNumberService } from './organisation-number.service';

@Component({
  selector: 'app-organisation-number',
  templateUrl: './organisation-number.component.html',
  styleUrls: ['./organisation-number.component.css']
})
export class OrganisationNumberComponent implements OnInit {

  title:string="My Organisation Number Component"
  isDisable:boolean=false;
  organisationnumbers:IOrganisationNumber[] = [];
  errorMessage:string=''


  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _cardService:OrganisationNumberService){
  }

  ngOnInit(): void {
    this._cardService.getAllOrganisationNumber().subscribe({
      next:(data)=>this.organisationnumbers=data,
      error:(error) => this.errorMessage=error
    });
  }
}