import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloMaquinaComponent } from './modelo-maquina.component';

describe('ModeloMaquinaComponent', () => {
  let component: ModeloMaquinaComponent;
  let fixture: ComponentFixture<ModeloMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeloMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeloMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
