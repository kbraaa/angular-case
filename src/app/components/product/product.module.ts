import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from "../../app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {AddToCartModule} from "../add-to-cart/add-to-cart.module";


@NgModule({
  declarations: [
    ProductComponent
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
    ProductComponent
  ]
})
export class ProductModule { }
