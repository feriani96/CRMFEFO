import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    CreateComponent,
    EditComponent
  ]
})
export class ClientModule { }
