import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivererMenuComponent } from './deliverer-menu.component';

describe('DelivererMenuComponent', () => {
  let component: DelivererMenuComponent;
  let fixture: ComponentFixture<DelivererMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivererMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivererMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
