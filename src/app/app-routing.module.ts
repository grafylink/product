import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {
    path :"",
    component : HomeComponent,
  },
 {
  path :"home",
  component:HomeComponent,
 },
 {
  path :"products",
  component:ProductsComponent,
 },
 {
  path :"customers",
  component:CustomersComponent,
 },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
