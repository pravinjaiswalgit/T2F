import { Component } from '@angular/core';



@Component({

    selector: 'app-login',
   templateUrl:'./login.component.html',
    styles: [
        `
        h2{
            color: blue;
        }

        `

       ]




})
export class LoginComponent{

    message = 'This is login component';  // data members


    isDisabled:boolean=false;

   /* public void test(){

    }*/

    test(): void{
        console.log('Ram');
    }

    doSomeThing(){
        console.log("doSomeThing called !!!");
    }



}
