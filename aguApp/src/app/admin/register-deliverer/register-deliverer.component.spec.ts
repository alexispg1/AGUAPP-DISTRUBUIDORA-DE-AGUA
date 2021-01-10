import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDelivererComponent } from './register-deliverer.component';

describe('RegisterDelivererComponent', () => {
  let component: RegisterDelivererComponent;
  let fixture: ComponentFixture<RegisterDelivererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDelivererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDelivererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
