import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'app/services/orders.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})
export class ListOrdersComponent implements OnInit {
  // Normal Orders
  displayedColumns: string[] = ['ticketId', 'totalPrice', 'status', 'customer', 'products'];
  dataSource:any;
  page:number;
  collectionSize:number;
  maxSize:number = 10;
  message:string;
  limit:number = 10;
  // chatMessages:any[] = new Array() 

  // Custom Orders
  displayedCustomColumns: string[] = ['ticketId', 'totalPrice', 'status','createdAt'];
  customDataSource:any;

  // Coming Orders
  displayedComingColumns: string[] = ['ticketId','createdAt','from','driverName','phone', 'status'];
  comingDataSource:any;


  // private updateSubscription: Subscription;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private ordersService:OrdersService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(
      params => this.page = params['page'] ? params['page'] : 1
    )

    this.onPageChange(this.page);
    this.onCustomPageChange(this.page);
    this.onComingPageChange(this.page);
  }
  
   // Pagination Method
  onPageChange(newPage:number){
    // this.router.navigate[''], {queryParams:{page:newPage}}
    this.ordersService.getNormalOrders(newPage,this.limit).subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res.orders);
      this.dataSource.sort = this.sort;
      this.collectionSize = res.total;
      console.log(res)
    })
  }

  // Listing Custom Orders
  onCustomPageChange(newPage:number){
    this.ordersService.getCustomOrders(newPage).subscribe( (res:any) =>{
    this.customDataSource = new MatTableDataSource(res.customorders);
    this.customDataSource.sort = this.sort;
    this.collectionSize = res.total;
    console.log(res)
    })
  }

  // Listing Coming Orders
  onComingPageChange(newPage:number){
    this.ordersService.getComingOrders(newPage).subscribe( (res:any) =>{
    this.comingDataSource = new MatTableDataSource(res.comingorders);
    this.comingDataSource.sort = this.sort;
    this.collectionSize = res.total;
    console.log(res.comingorders)
    })
  }


  // Filtering Coming Data By Front
  applyFilter(filterValue:string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
