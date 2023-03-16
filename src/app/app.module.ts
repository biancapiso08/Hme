import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButonCuCaleCatreFormulare2Component } from './components/h-o-m-e/buton-cu-cale-catre-formulare2/buton-cu-cale-catre-formulare2.component';
import { ButonCuCaleCatreFormulareComponent } from './components/h-o-m-e/buton-cu-cale-catre-formulare/buton-cu-cale-catre-formulare.component';
import { Component1Component } from './components/h-o-m-e/component-1/component-1.component';
import { HOMEComponent } from './components/h-o-m-e/h-o-m-e.component';
import { HomeTxtComponent } from './components/h-o-m-e/home-txt/home-txt.component';

@NgModule({
  declarations: [
    AppComponent,
    ButonCuCaleCatreFormulareComponent,
    ButonCuCaleCatreFormulare2Component,
    Component1Component,
    HomeTxtComponent,
    HOMEComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
