import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestOrdesComponent } from './request-ordes.component';

describe('RequestOrdesComponent', () => {
  let component: RequestOrdesComponent;
  let fixture: ComponentFixture<RequestOrdesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestOrdesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestOrdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
