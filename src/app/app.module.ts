import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { BarraComponent } from './barra/barra.component';


@NgModule({
  declarations: [AppComponent, BarraComponent],
  imports: [BrowserModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
