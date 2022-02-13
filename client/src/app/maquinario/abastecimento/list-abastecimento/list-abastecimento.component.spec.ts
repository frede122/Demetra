import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbastecimentoComponent } from './list-abastecimento.component';

describe('ListAbastecimentoComponent', () => {
  let component: ListAbastecimentoComponent;
  let fixture: ComponentFixture<ListAbastecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAbastecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAbastecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
