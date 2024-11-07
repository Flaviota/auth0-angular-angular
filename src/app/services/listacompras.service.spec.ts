import { TestBed } from '@angular/core/testing';

import { ListacomprasService } from './listacompras.service';

describe('ListacomprasService', () => {
  let service: ListacomprasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListacomprasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
