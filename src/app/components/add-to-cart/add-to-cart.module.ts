import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddToCartComponent } from './add-to-cart.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AddToCartComponent
  ],
  exports: [
    AddToCartComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatButtonModule
  ],
})
export class AddToCartModule { }
