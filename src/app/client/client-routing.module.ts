import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'client/home',component:HomeComponent},
  {path:'client/create',component:CreateComponent},
  {path:'client/edit/:id',component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
