import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBanner } from './banner.interface';
import { BannerService } from './banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  title:string="My Banner"
  isDisable:boolean=false;
  banners:IBanner[] = [];
  errorMessage:string=''
  imageWidth:number=1920/3;
  imageHeight:number=760/3;

  constructor(private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _bannerService:BannerService){
  }

  ngOnInit(): void {
    this._bannerService.getAllBanner().subscribe({
      next:(data)=>this.banners=data,
      error:(error) => this.errorMessage=error
    }
    );
  }

}
