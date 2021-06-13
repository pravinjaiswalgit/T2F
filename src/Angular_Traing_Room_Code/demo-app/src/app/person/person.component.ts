import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from './person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit  {

  // personService:PersonService;

  title='Zensar';

  isSelected:boolean=true;

  persons: Person[] = [];

  constructor(private personService:PersonService){
    //  this.personService=personService;
  }

  

  ngOnInit(): void {
    this.persons=this.personService.getAllPerson();
    // console.log(this.persons)
  }

  

  
  

  

}
