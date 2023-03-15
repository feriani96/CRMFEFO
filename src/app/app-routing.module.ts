import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { CreateClientComponent } from './pages/client/create-client/create-client.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InvoiceComponent } from './pages/invoice/invoice.component';
import { SaleComponent } from './pages/sale/sale.component';
import { HomeComponent } from './product/home/home.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'client',component:ClientComponent},
  {path:'sale',component:SaleComponent},
  {path:'createClient',component:CreateClientComponent},
  {path:'homeProduct',component:HomeComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
