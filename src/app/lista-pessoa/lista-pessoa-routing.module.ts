import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';

const routes: Routes = [
  {path: '', component: ListaPessoaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaPessoaRoutingModule { }
