import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
   
  ],
  exports: [
    CreateComponent,
    ListComponent
  ]
})
export class InvoicesModule { }
