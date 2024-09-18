import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliderComponent} from "./slider/slider.component";
import {MatCardModule} from "@angular/material/card";
import {HeaderComponent} from "./header/header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {FooterComponent} from "./footer/footer.component";
import {CardComponent} from "./card/card.component";
import {MatButtonModule} from "@angular/material/button";
import {AppRoutingModule} from "../app-routing.module";
import {DetailCardComponent} from "./detail-card/detail-card.component";
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DetailCardComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  exports: [
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    DetailCardComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class ComponentsModule { }
