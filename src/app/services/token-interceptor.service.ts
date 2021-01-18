import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    const token = localStorage.getItem('token');

    if (req.headers.get('token') !== undefined) {
        if(token) {
          let tokenizedReq = req.clone({
            setHeaders: {
                token: token
            }
          });
        return next.handle(tokenizedReq);
        }
        else{
          const newHeaders = req.headers.delete('Anonymous')
          const newRequest = req.clone({ headers: newHeaders });
          return next.handle(newRequest);
        }
    }
  }
}