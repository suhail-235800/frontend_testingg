import { TestBed } from '@angular/core/testing';

import { OfferrideService } from './offerride.service';

describe('OfferrideService', () => {
  let service: OfferrideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferrideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
