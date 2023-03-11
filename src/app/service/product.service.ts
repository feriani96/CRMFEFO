import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.urlProducts;


  constructor(private http: HttpClient) { }
  
   
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.url}`);
    }
  }
