import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLivroComponent } from '../lista-livro/lista-livro/lista-livro.component';

const routes: Routes = [
  { path: '', component: ListaLivroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaLivroRoutingModule { }
