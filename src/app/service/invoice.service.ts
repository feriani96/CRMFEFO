import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Invoice } from '../models/Invoice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private url = environment.urlInvoices;


  constructor(private http: HttpClient) { }


  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.url}`);
  }
}
