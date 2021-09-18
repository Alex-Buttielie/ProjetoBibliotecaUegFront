import { Component, OnInit } from '@angular/core';
import { ListaPessoaService } from '../../service/pessoa/lista-pessoa.service';
import { Pessoa } from '../../model/pessoa/pessoa'

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {

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
