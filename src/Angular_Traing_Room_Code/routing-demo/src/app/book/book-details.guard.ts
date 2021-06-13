import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class BookDetailsGuard implements CanActivate {

  constructor(private _router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      const id:number=Number(route.paramMap.get('id'));

        if(id< 1 || isNaN(id)){
          alert("Sorry, Invalid Book Id")
          this._router.navigate(['/books']);
          return false;
        }

      return true;
  }
  
}
