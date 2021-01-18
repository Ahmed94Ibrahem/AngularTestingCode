import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customerUrl:string = `${environment.apiUrl}/customers`;
  deleteCustomerUrl:string = `${environment.apiUrl}/deletecustomer`


  constructor(private httpClient:HttpClient) { }

  getCustomers(page){
    return this.httpClient.get(this.customerUrl + '/' + page);
  }
  
  deleteCustomer(id){
    return this.httpClient.delete(this.deleteCustomerUrl + '/' + id);
  }
}
