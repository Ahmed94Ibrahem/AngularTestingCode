import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors:{};

  constructor(
    private _router:Router,
    private _authService:AuthService) { }

  ngOnInit(): void {
  }

  signIn(credentials){
    this._authService.login(credentials).subscribe(
      result => this._router.navigate(['/']),
      error => {
         this.errors = error.error;
         console.log(this.errors)
      }
    )
  }

  forget(){
    this._router.navigate(['auth/forget-password']);
  }
  activate(){
    this._router.navigate(['auth/verify']);
  }
}


