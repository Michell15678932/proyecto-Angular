import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Hola}'@angular/hola';
import {proyectoangular}'@angular/app/proyectoangular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponentComponent } from './primer-component/primer-component.component';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';
import { ComponentMiniComponent } from './component-mini/component-mini.component';

@NgModule({
  declarations: [
    Hola
    proyectoangular
    AppComponent,
    PrimerComponentComponent,
    SegundoComponentComponent,
    ComponentMiniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
