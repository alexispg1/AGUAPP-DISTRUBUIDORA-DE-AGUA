import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAcountsComponent } from './my-acounts.component';

describe('MyAcountsComponent', () => {
  let component: MyAcountsComponent;
  let fixture: ComponentFixture<MyAcountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAcountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAcountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
