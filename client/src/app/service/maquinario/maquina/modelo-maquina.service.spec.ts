import { TestBed } from '@angular/core/testing';

import { ModeloMaquinaService } from './modelo-maquina.service';

describe('ModeloMaquinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModeloMaquinaService = TestBed.get(ModeloMaquinaService);
    expect(service).toBeTruthy();
  });
});
