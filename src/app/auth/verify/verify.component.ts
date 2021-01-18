import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  errors:{};
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  verifyVendor(data){
    this.authService.verifyVendor(data).subscribe( (res:any)=>{
      console.log(res);
    },
    error => {
      this.errors = error.error
      console.log(this.errors)
    })
  }
}
