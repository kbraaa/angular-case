import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailComponent} from "./product-detail.component";
import {AppRoutingModule} from "../../app-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule

  ],
  exports: [
    ProductDetailComponent
  ],
})
export class ProductDetailModule { }
