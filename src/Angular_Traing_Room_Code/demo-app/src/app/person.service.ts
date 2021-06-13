import { Injectable } from "@angular/core";
import { Person } from "./person/person";


export class PersonService{


    persons:Person[]=[

        {
          "personName":"Sharad",
          "personId":1,
          "personAge":30
        },
    
        {
          "personName":"Ram",
          "personAge":30,
          "personId":2
        },
    
    
        {
          "personName":"Laxman",
          "personAge":28,
          "personId":3
        }
    
      ];


      getAllPerson():Person[]{
          return this.persons;
      }
    

}