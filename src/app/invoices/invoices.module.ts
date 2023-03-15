import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    CreateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    InvoicesRoutingModule
  ],
  exports: [
    CreateComponent,
    ListComponent
  ]
})
export class InvoicesModule { }
