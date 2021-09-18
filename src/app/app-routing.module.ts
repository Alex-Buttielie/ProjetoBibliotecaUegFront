import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lista-emprestimo' },
  {
    path: 'lista-emprestimo',
    loadChildren: () => import('./lista-emprestimo/lista-emprestimo.module').then(m => m.ListaEmprestimoModule)
  },
  {
    path: 'lista-pessoa',
    loadChildren: () => import('./lista-pessoa/lista-pessoa.module').then(m => m.ListaPessoaModule)
  },
 {
    path: 'lista-livro',
    loadChildren: () => import('./lista-livro/lista-livro.module').then(m => m.ListaLivroModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
