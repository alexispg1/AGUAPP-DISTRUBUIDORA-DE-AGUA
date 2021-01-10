import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUbicationsComponent } from './my-ubications.component';

describe('MyUbicationsComponent', () => {
  let component: MyUbicationsComponent;
  let fixture: ComponentFixture<MyUbicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUbicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUbicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
