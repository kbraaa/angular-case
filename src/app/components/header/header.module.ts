import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AppRoutingModule} from "../../app-routing.module";
import {MatBadgeModule} from "@angular/material/badge";
import {SearchModule} from "../search/search.module";

@NgModule({
  declarations: [
    HeaderComponent
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MatIconModule,
        MatToolbarModule,
        MatBadgeModule,
        SearchModule
    ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
