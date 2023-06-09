import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { ClientComponent } from './pages/client/client.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { SaleComponent } from './pages/sale/sale.component';
import { CreateClientComponent } from './pages/client/create-client/create-client.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientComponent,
    InvoiceComponent,
    SaleComponent,
    CreateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
