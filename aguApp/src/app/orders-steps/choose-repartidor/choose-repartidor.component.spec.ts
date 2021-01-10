import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseRepartidorComponent } from './choose-repartidor.component';

describe('ChooseRepartidorComponent', () => {
  let component: ChooseRepartidorComponent;
  let fixture: ComponentFixture<ChooseRepartidorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseRepartidorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
