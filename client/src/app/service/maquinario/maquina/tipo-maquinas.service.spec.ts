import { TestBed } from '@angular/core/testing';

import { TipoMaquinasService } from './tipo-maquinas.service';

describe('TipoMaquinasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoMaquinasService = TestBed.get(TipoMaquinasService);
    expect(service).toBeTruthy();
  });
});
