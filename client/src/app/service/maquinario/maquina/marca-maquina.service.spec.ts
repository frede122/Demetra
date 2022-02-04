import { TestBed } from '@angular/core/testing';

import { MarcaMaquinaService } from './marca-maquina.service';

describe('MarcaMaquinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarcaMaquinaService = TestBed.get(MarcaMaquinaService);
    expect(service).toBeTruthy();
  });
});
