import { TestBed } from '@angular/core/testing';

import { TipoMaquinaService } from './tipo-maquina.service';

describe('TipoMaquinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoMaquinaService = TestBed.get(TipoMaquinaService);
    expect(service).toBeTruthy();
  });
});
