import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {ProductModule} from "../../components/product/product.module";
import {SliderModule} from "../../components/slider/slider.module";
import {FiltersModule} from "../../components/filters/filters.module";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ProductModule,
    SliderModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule
  ],
})
export class HomeModule {

}
