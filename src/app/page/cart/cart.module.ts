import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from "./cart.component";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class CartModule { }
