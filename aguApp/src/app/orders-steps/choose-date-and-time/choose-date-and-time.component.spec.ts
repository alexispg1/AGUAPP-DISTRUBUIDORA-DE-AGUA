import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseDateAndTimeComponent } from './choose-date-and-time.component';

describe('ChooseDateAndTimeComponent', () => {
  let component: ChooseDateAndTimeComponent;
  let fixture: ComponentFixture<ChooseDateAndTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseDateAndTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseDateAndTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
