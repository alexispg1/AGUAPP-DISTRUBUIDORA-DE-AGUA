import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidosHistorialComponent } from './lista-pedidos-historial.component';

describe('ListaPedidosHistorialComponent', () => {
  let component: ListaPedidosHistorialComponent;
  let fixture: ComponentFixture<ListaPedidosHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPedidosHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPedidosHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
