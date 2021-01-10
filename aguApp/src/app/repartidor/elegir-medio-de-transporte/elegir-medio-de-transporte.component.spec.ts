import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirMedioDeTransporteComponent } from './elegir-medio-de-transporte.component';

describe('ElegirMedioDeTransporteComponent', () => {
  let component: ElegirMedioDeTransporteComponent;
  let fixture: ComponentFixture<ElegirMedioDeTransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElegirMedioDeTransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElegirMedioDeTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
