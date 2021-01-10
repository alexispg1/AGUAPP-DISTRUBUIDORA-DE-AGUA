import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSupplieComponent } from './create-supplie.component';

describe('CreateSupplieComponent', () => {
  let component: CreateSupplieComponent;
  let fixture: ComponentFixture<CreateSupplieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSupplieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSupplieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
