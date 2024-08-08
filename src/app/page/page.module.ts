import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {MatCardModule} from "@angular/material/card";
import {SepetComponent} from "./sepet/sepet.component";
import {ComponentsModule} from "../components/components.module";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
  declarations: [
    ContactComponent,
    SepetComponent,
    ProductDetailComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ComponentsModule
  ]
})
export class PageModule { }
