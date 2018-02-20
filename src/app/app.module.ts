import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { PessoaService } from './pessoa.service';


@NgModule({
  declarations: [
    AppComponent,
    ListaPessoasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
