import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './components/lista-pessoa/lista-pessoa.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaEmprestimoComponent } from './components/lista-emprestimo/lista-emprestimo.component';
import { ListaLivroComponent } from './components/lista-livro/lista-livro.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
