import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/model/livro/livro';
import { ListaLivroService } from 'src/app/service/livro/lista-livro.service';

@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.component.html',
  styleUrls: ['./lista-livro.component.css']
})
export class ListaLivroComponent implements OnInit {

  livros!: Livro[];

  constructor(private listaLivroService : ListaLivroService) { }

  ngOnInit(): void {
    this.carregarListaLivro();
  }

  private carregarListaLivro(){
    this.listaLivroService.carregarListaLivro().subscribe(response =>{
      this.livros = response;
    });
  }
  
}
