import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate{

  constructor(private _authService:AuthService,private _router:Router) { }
  canActivate(){
    if(this._authService.isLoggedIn()){
      return true;
    }else{
      this._router.navigate(['auth/login']);
      return false;
    } 


  }
}
