import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
import { Model } from '../models/model';


@Injectable({
  providedIn: 'root'
})

export class BaseService<t extends Model> {
  private url = environment.apiUrl;
  public route = "";

  constructor(public http: HttpClient) {}

  public create(parament: t): Observable<t>{
    return this.http.post<t>(`${this.url}/${this.route}`, parament);
  }

  public getById(id: string): Observable<t>{
    return this.http.get<t>(`${this.url}/${this.route}/${id}`)
  }

  public getAll(): Observable<t[]>{
    return this.http.get<t[]>(`${this.url}/${this.route}`);
  }

  public update(id, parament: t): Observable<t>{
    return this.http.put<t>(`${this.url}/${this.route}/${id}`, parament)
  }

  public delete(id){
    return this.http.delete<t>(`${this.url}/${this.route}/${id}`)
  }

}
