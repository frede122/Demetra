import { TestBed } from '@angular/core/testing';

import { MaquinaService } from './maquina.service';

describe('MaquinaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaquinaService = TestBed.get(MaquinaService);
    expect(service).toBeTruthy();
  });
});
