import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcaMaquinaComponent } from './marca-maquina.component';

describe('MarcaMaquinaComponent', () => {
  let component: MarcaMaquinaComponent;
  let fixture: ComponentFixture<MarcaMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcaMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcaMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
