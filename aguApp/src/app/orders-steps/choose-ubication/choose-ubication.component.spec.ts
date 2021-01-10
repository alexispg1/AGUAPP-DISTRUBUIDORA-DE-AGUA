import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUbicationComponent } from './choose-ubication.component';

describe('ChooseUbicationComponent', () => {
  let component: ChooseUbicationComponent;
  let fixture: ComponentFixture<ChooseUbicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseUbicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseUbicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
