import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  errors:{};
  constructor(private _authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  forgetPassword(email){
    this._authService.forgetPassword(email).subscribe( (res:any)=>{
      this.router.navigate(['auth/reset-password']);
      console.log(res)
    },
    error => {
      this.errors = error.error;
      console.log(this.errors)
     })
  }
}
