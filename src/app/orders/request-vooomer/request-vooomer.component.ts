import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'app/services/orders.service';

@Component({
  selector: 'app-request-vooomer',
  templateUrl: './request-vooomer.component.html',
  styleUrls: ['./request-vooomer.component.css']
})
export class RequestVooomerComponent implements OnInit {

  results:any;
  finalLocation;
  locations:any[] = new Array();
  constructor(private ordersService:OrdersService,private router:Router) { }

  ngOnInit(): void {
    this.ordersService.getVendorInfo().subscribe( (res:any) =>{
      this.results = res.vendor.store.locations;
    })
  }

  confirmVooomer(){
    let vooomerLocations = {
      finalLocation: this.locations[0],
      locations: this.locations
    };
    this.ordersService.confirmCustomOrder(vooomerLocations).subscribe((res:any)=>{
      alert(res.message);
      this.router.navigate(['orders/list-orders']);
    })
  }

}
