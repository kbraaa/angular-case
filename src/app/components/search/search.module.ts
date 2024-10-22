import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    SearchComponent
  ],
  exports: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule
  ]
})
export class SearchModule { }
