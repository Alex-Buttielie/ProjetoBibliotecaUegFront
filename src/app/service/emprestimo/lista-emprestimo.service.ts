import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emprestimo } from '../../model/emprestimo/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class ListaEmprestimoService {

  private url = "http://localhost:8081/emprestimoController/emprestimos"

  constructor(private httpClient : HttpClient) { }

  listarEmprestimos(): Observable<Emprestimo[]>{
    return this.httpClient.get<Emprestimo[]>(`${this.url}`)
  }
  
}
