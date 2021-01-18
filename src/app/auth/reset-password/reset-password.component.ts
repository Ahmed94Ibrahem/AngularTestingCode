import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  errors:{};
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  resetPassword(data){
    this.authService.resetPassword(data).subscribe( (res:any) =>{
      this.router.navigate(['/login'])
      console.log(res);
    },
    error => {
      this.errors = error.error;
      console.log(this.errors)
     })
  }
}
