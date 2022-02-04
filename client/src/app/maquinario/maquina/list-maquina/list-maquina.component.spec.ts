import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaquinaComponent } from './list-maquina.component';

describe('ListMaquinaComponent', () => {
  let component: ListMaquinaComponent;
  let fixture: ComponentFixture<ListMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
