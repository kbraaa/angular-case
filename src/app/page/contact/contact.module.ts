import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from "./contact.component";
import {AppRoutingModule} from "../../app-routing.module";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    ContactComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
  ],
})
export class ContactModule { }
