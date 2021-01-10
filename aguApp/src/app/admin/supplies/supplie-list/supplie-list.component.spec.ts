import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplieListComponent } from './supplie-list.component';

describe('SupplieListComponent', () => {
  let component: SupplieListComponent;
  let fixture: ComponentFixture<SupplieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
