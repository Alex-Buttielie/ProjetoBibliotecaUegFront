import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from 'src/app/model/livro/livro';

@Injectable({
  providedIn: 'root'
})
export class ListaLivroService {

  private url = "http://localhost:8081/livroController/livros"

  constructor(private httpClient : HttpClient) { }


  carregarListaLivro(): Observable<Livro[]>{
    return this.httpClient.get<Livro[]>(`${this.url}`)
  }

}
