import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import {SepetComponent} from "./page/sepet/sepet.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {ProductSingleComponent} from "./page/product-single/product-single.component";

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
    path: 'product-single',
    component: ProductSingleComponent,
  },
  {
    path: 'sepet',
    component: SepetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
