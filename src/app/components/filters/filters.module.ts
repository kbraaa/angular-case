import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FiltersComponent} from "./filters.component";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    MatSelectModule
  ],
  exports: [
    FiltersComponent,
  ]
})
export class FiltersModule { }
