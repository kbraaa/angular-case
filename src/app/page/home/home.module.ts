import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {ProductModule} from "../../components/product/product.module";
import {SliderModule} from "../../components/slider/slider.module";
import {FiltersModule} from "../../components/filters/filters.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ProductModule,
    SliderModule,
    FiltersModule
  ],
})
export class HomeModule {

}
