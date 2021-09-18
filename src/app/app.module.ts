import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa/lista-pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaEmprestimoComponent } from './lista-emprestimo/lista-emprestimo/lista-emprestimo.component';
import { ListaLivroComponent } from './lista-livro/lista-livro/lista-livro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule }  from '@angular/material/toolbar'

@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent,
    ListaEmprestimoComponent,
    ListaLivroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
