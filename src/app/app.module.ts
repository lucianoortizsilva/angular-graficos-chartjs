import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeuComponenteDeGraficoComponent } from './meu-componente-de-grafico/meu-componente-de-grafico.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponenteDeGraficoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
