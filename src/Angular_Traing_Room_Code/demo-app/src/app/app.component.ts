import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name:string='Zensar';

  message:any;

  title = 'This is angular application';

  customer={
      "customerId":1,
      "customerName":"Ram",
      "customerAddress":"Pune"
  }

  myNumber:number=0.75

  birthDate=new Date();

}
