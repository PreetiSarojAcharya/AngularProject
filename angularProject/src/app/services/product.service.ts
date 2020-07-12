import { Injectable } from '@angular/core';
import { Productmodel } from './../Model/productmodel';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: Http) {}

  GetAllProducts(): Observable<Productmodel[]> {
    return this.http
      .get('http://localhost:4591/api/product')
      .pipe(map((response: Response) => <Productmodel[]>response.json()));
  }
}
