import { TestBed } from '@angular/core/testing';

import { RepartidoresService } from './repartidores.service';

describe('RepartidoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepartidoresService = TestBed.get(RepartidoresService);
    expect(service).toBeTruthy();
  });
});
