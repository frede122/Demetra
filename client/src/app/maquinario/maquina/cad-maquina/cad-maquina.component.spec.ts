import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadMaquinaComponent } from './cad-maquina.component';

describe('MaquinaComponent', () => {
  let component: CadMaquinaComponent;
  let fixture: ComponentFixture<CadMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
