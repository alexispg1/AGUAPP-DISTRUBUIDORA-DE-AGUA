import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPedidosDetallesComponent } from './lista-pedidos-detalles.component';

describe('ListaPedidosDetallesComponent', () => {
  let component: ListaPedidosDetallesComponent;
  let fixture: ComponentFixture<ListaPedidosDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPedidosDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPedidosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
