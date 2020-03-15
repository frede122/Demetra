import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
        const requestUrl: Array<string> = request.url.split('/');
        const apiUrl: Array<string> = environment.apiUrl.split('/');
        const token = localStorage.getItem('token');

        if(token && (requestUrl[2] == apiUrl[2])){
            const newRequest = request.clone({ setHeaders: { 'Authorization' : `Bearer ${token}`} });
            // const newRequest = request.clone({ setHeaders: { 'Authorization' : `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9sb2dpbiIsImlhdCI6MTU4MzAwNjcyNywiZXhwIjoxNTg1NTk4NzI3LCJuYmYiOjE1ODMwMDY3MjcsImp0aSI6InkwZ1NIMjhCdGV3dDhySkQiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.1JkYDGGzo6Rw7HcjjXCsd6O_ENy6AFnkwARIoOZ4enE`} });
            return next.handle(newRequest);
        }else{
            return next.handle(request);
        }
        return next.handle(request);
  }
}