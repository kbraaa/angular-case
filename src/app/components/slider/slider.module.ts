import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliderComponent} from "./slider.component";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    SliderComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    SliderComponent,
  ]
})
export class SliderModule { }
