import { Component, OnInit } from '@angular/core';
import { Invoice, InvoiceDto } from 'src/app/models/Invoice';
import { InvoiceService } from 'src/app/service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit{

  invoices: Invoice[] = [];
  invoicesDto: InvoiceDto[] = [];

  constructor(private invoiceService:InvoiceService ) { }

  ngOnInit(): void {

  this.invoiceService.getInvoices().subscribe((data: Invoice[]) => {
    this.invoices = data;
    this.invoicesDto = this.inintInvoiceDto(this.invoices);
    console.log(this.invoices);

  });
}


inintInvoiceDto(invoices: Invoice[]):InvoiceDto[] {
  let tempInvoiceDto: InvoiceDto[] = [];
 
  invoices.forEach((invoice) => {

    const restDto: InvoiceDto = {
      discount: invoice.discount,
      tax: invoice.tax,
      date: invoice.date,
      total: invoice.total,
      stamp: invoice.stamp,
      client: invoice.client,
   
    };

    tempInvoiceDto.push(restDto);

   });

  return tempInvoiceDto;
}
 
private getPhoto(data: string): any {
  return 'data:image/jpg;base64,' + data;
}


}