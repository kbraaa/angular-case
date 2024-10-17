import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from "./product-detail.component";
import {AppRoutingModule} from "../../app-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AddToCartModule} from "../add-to-cart/add-to-cart.module";



@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    AddToCartModule

  ],
  exports: [
    ProductDetailComponent
  ],
})
export class ProductDetailModule { }
