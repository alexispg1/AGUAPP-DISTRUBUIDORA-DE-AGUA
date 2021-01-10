import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRepartidoComponent } from './navbar-repartido.component';

describe('NavbarRepartidoComponent', () => {
  let component: NavbarRepartidoComponent;
  let fixture: ComponentFixture<NavbarRepartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarRepartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRepartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
