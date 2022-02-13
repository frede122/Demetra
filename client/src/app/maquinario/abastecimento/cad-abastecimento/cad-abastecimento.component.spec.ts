import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAbastecimentoComponent } from './cad-abastecimento.component';

describe('CadAbastecimentoComponent', () => {
  let component: CadAbastecimentoComponent;
  let fixture: ComponentFixture<CadAbastecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadAbastecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
