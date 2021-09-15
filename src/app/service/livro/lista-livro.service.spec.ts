import { TestBed } from '@angular/core/testing';

import { ListaLivroService } from './lista-livro.service';

describe('ListaLivroService', () => {
  let service: ListaLivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaLivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
