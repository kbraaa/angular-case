import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductComponent} from "./product.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from "../../app-routing.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule { }
