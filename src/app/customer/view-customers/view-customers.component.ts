import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'app/services/customer.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phone','actions'];
  dataSource:any;
  page:number;
  collectionSize:number;
  maxSize:number = 10;
  message:string;
  limit:number = 10;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private customerService:CustomerService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => this.page = params['page'] ? params['page'] : 1
    )

    this.onPageChange(this.page)
  }

  // Method to List The Customers with Pagination
  onPageChange(newPage:number){
    this.customerService.getCustomers(newPage).subscribe((res:any)=>{
      this.dataSource = new MatTableDataSource(res.customers);
      this.dataSource.sort = this.sort;
      this.collectionSize = res.total;
      console.log(res)
    })
  }

  // Method to Delete a Customer
  deleteCustomer(id){
    if(confirm("Are you Sure you Want To Delete This Customer ?!")){
      this.customerService.deleteCustomer(id).subscribe((res:any)=>{
        alert(res.message);
        this.onPageChange(this.page)
      })
    }
  }
}
