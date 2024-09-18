import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import {MatCardModule} from "@angular/material/card";
import {SepetComponent} from "./sepet/sepet.component";
import {ComponentsModule} from "../components/components.module";
import {HomeComponent} from "./home/home.component";
import { ProductSingleComponent } from './product-single/product-single.component';

@NgModule({
  declarations: [
    ContactComponent,
    SepetComponent,
    HomeComponent,
    ProductSingleComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ComponentsModule,
  ]
})
export class PageModule { }
