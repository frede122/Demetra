import { TestBed } from '@angular/core/testing';

import { AbastecimentoService } from './abastecimento.service';

describe('AbastecimentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbastecimentoService = TestBed.get(AbastecimentoService);
    expect(service).toBeTruthy();
  });
});
