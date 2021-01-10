import { TestBed } from '@angular/core/testing';

import { OrdenService } from './orden.service';

describe('OrdenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdenService = TestBed.get(OrdenService);
    expect(service).toBeTruthy();
  });
});
