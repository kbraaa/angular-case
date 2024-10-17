import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CartComponent} from "./cart.component";
import {AppRoutingModule} from "../../app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {AddToCartModule} from "../../components/add-to-cart/add-to-cart.module";

@NgModule({
  declarations: [
    CartComponent
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        AddToCartModule,
    ]
})
export class CartModule { }
