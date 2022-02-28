import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListManutencaoComponent } from './list-manutencao.component';

describe('ListManutencaoComponent', () => {
  let component: ListManutencaoComponent;
  let fixture: ComponentFixture<ListManutencaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListManutencaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListManutencaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
