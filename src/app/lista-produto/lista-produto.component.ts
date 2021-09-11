import { Component, OnInit } from '@angular/core';
import { ListaPessoaService } from '../service/lista-pessoa.service';
import { Pessoa } from '../model/pessoa'

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  pessoas!: Pessoa[];

  constructor(private listaPessoaService: ListaPessoaService) { }

  ngOnInit(): void {
    this.carregaListaPessoas();
  }

  private carregaListaPessoas() {
    this.listaPessoaService.listaPessoa().subscribe(response => {
      this.pessoas = response;
    });
  }

}
