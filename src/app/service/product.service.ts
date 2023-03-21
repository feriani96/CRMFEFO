import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product, ProductDto } from '../models/Product';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }


  get() {
    return this.http.get<Product[]>('http://localhost:8080/api/products');
  }


  create(payload: Product) {
    return this.http.post<Product>('http://localhost:8080/api/products', payload);
  }
  getById(id: number) {
    return this.http.get<Product>(`http://localhost:8080/api/products/${id}`);
  }

  delete(id: string) {
    return this.http.delete<Product>(`http://localhost:8080/api/products/${id}`);
  }
}

