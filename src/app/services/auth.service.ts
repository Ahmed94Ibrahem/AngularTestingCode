import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
// import {  tokenNotExpired } from 'angular2-jwt';

import { Router } from '@angular/router';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl:string = `${environment.apiUrl}/login`;
  forgetUrl:string = `${environment.apiUrl}/forget`;
  resetUrl:string = `${environment.apiUrl}/reset`;
  verifyUrl:string = `${environment.apiUrl}/verify`;


  constructor(private _HttpClient:HttpClient, private _router:Router) { }

  login(credentials){
    return this._HttpClient.post<any>(this.loginUrl, credentials).pipe(map(res => {
      let result = res;
      if(result && result.token){
        localStorage.setItem('token', result.token);
        return true;
      }else{
        return false;
      }
    }
      ));
  };

  forgetPassword(email){
    return this._HttpClient.post(this.forgetUrl, email);
  }

  resetPassword(data){
    return this._HttpClient.post(this.resetUrl, data)
  }
  verifyVendor(data){
    return this._HttpClient.post(this.verifyUrl, data)
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  isLoggedIn(){
    let result = localStorage.getItem('token');
    if(result){
      return true;
    }else{
      return false;
    } 
  }


}
