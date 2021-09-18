import { Component, OnInit } from '@angular/core';
import { Emprestimo } from 'src/app/model/emprestimo/emprestimo';
import { ListaEmprestimoService } from 'src/app/service/emprestimo/lista-emprestimo.service';

@Component({
  selector: 'app-lista-emprestimo',
  templateUrl: './lista-emprestimo.component.html',
  styleUrls: ['./lista-emprestimo.component.css']
})
export class ListaEmprestimoComponent implements OnInit {

  emprestimos!: Emprestimo[];
  constructor(private lisitaEmprestimoService: ListaEmprestimoService) { }

  ngOnInit(): void {
    this.carregaListaEmprestimo();
  }
  private carregaListaEmprestimo() {
    this.lisitaEmprestimoService.listarEmprestimos().subscribe(response => {
      this.emprestimos = response;
    });
  }



}
