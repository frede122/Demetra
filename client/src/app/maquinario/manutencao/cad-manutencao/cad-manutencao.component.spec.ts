import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadManutencaoComponent } from './cad-manutencao.component';

describe('CadManutencaoComponent', () => {
  let component: CadManutencaoComponent;
  let fixture: ComponentFixture<CadManutencaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadManutencaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
