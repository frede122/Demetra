import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
import { Model } from '../models/Model';


@Injectable({
  providedIn: 'root'
})
export class BaseService<t extends Model> {
  private url = environment.apiUrl;
  public route ="";

  constructor(public http: HttpClient) {}

  public create(parament: t): Observable<any>{
    return this.http.post<t>(`${this.url}/${this.route}`, parament);
  }
  public getAll(): Observable<any>{
    return this.http.get<t[]>(`${this.url}/${this.route}`);
  }
}
