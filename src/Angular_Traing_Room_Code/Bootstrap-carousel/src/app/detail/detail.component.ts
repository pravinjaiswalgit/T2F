import { Component, OnInit } from '@angular/core';
import { IEpisodeDetail } from './episode-detail';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  episodeDetail: IEpisodeDetail;

  ngOnInit(): void {
    this.episodeDetail = {
      id: 1,
      title: "An Exercise in Fatality",
      productionYear: "1974",
      synopsis: "A health club owner murders one of his franchisees. Lt. Columbo is on the case.",
      imageUrls: ["assets/photos/1.jpg", "assets/photos/2.jpg", "assets/photos/3.jpg" ]
    };          
  }

}
