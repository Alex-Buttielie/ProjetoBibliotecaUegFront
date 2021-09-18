import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmprestimoComponent } from './lista-emprestimo/lista-emprestimo.component';

const routes: Routes = [
  { path: '', component: ListaEmprestimoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaEmprestimoRoutingModule { }
