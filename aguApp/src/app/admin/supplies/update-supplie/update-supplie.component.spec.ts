import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSupplieComponent } from './update-supplie.component';

describe('UpdateSupplieComponent', () => {
  let component: UpdateSupplieComponent;
  let fixture: ComponentFixture<UpdateSupplieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSupplieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSupplieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
