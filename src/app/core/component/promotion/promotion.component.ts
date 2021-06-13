import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPromotion } from './promotion.interface';
import { PromotionService } from './promotion.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  title:string="My Organisation Event"
  isDisable:boolean=false;
  promotions:IPromotion[] = [];
  errorMessage:string=''

  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _promotionService:PromotionService){
  }

  ngOnInit(): void {
    this._promotionService.getAllPromotion().subscribe({
      next:(data)=>this.promotions=data,
      error:(error) => this.errorMessage=error
    });
  }
}
