import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Pessoa } from '../../model/pessoa/pessoa';

@Injectable({
  providedIn: 'root'
})
export class ListaPessoaService {

  private url = "http://localhost:8081/pessoaController/pessoas"

  constructor(private httpClient : HttpClient) { }

  listaPessoa(): Observable<Pessoa[]>{
    return this.httpClient.get<Pessoa[]>(`${this.url}`)
  }
  
}
