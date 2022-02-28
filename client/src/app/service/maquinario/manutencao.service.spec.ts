import { TestBed } from '@angular/core/testing';

import { ManutencaoService } from './manutencao.service';

describe('ManutencaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManutencaoService = TestBed.get(ManutencaoService);
    expect(service).toBeTruthy();
  });
});
