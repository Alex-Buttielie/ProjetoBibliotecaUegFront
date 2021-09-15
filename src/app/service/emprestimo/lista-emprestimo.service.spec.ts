import { TestBed } from '@angular/core/testing';

import { ListaEmprestimoService } from './lista-emprestimo.service';

describe('ListaEmprestimoService', () => {
  let service: ListaEmprestimoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaEmprestimoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
