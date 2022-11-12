import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { MenuComponent } from './nav/menu/menu.component';
import { HeaderComponent } from './nav/header/header.component';
import { HomeComponent } from './nav/home/home.component';
import { FooterComponent } from './nav/footer/footer.component';
import {SidebarModule} from "primeng/sidebar";
import {ButtonModule} from "primeng/button";
import {AvatarModule} from "primeng/avatar";
import {BadgeModule} from "primeng/badge";
import {PaginatorModule} from "primeng/paginator";
import { MenuMobileComponent } from './nav/menu-mobile/menu-mobile.component';
import {SelectButtonModule} from "primeng/selectbutton";
import {MenuModule} from "primeng/menu";
import {ColorPickerModule} from "primeng/colorpicker";
import {EditorModule} from "primeng/editor";





@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MenuMobileComponent,


  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        SidebarModule,
        ButtonModule,
        AvatarModule,
        BadgeModule,
        PaginatorModule,
        SelectButtonModule,
        MenuModule,
        ColorPickerModule,
        EditorModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
