import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  normalOrdersUrl:string = `${environment.apiUrl}/orders`;
  customOrdersUrl:string = `${environment.apiUrl}/customorders`;
  comingOrdersUrl:string = `${environment.apiUrl}/comingorders`;
  vendorInfo:string = `${environment.apiUrl}/info`;
  requestVooomerUrl:string = `${environment.apiUrl}/addcustomorder`;

  
  
  constructor(private httpClient:HttpClient) { }


  getNormalOrders(page,limit){
    const httpParams = new HttpParams({
      fromObject: {
        limit: limit,
        status: 'approved'
      }
    })
    return this.httpClient.get(this.normalOrdersUrl + '/' + page, {params: httpParams})
  }

  getCustomOrders(page){
    return this.httpClient.get(this.customOrdersUrl + '/' + page);
  }

  getComingOrders(page){
    return this.httpClient.get(this.comingOrdersUrl + '/' + page);
  }

  getVendorInfo(){
    return this.httpClient.get(this.vendorInfo);
  }

  confirmCustomOrder(data){
    return this.httpClient.post(this.requestVooomerUrl, data);
  }

}
