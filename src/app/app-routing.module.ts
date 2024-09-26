import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import {ProductSingleComponent} from "./page/product-single/product-single.component";
import {CartComponent} from "./page/cart/cart.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'product-single/:id',
    component: ProductSingleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
