import { TestBed } from '@angular/core/testing';

import { BuyBundleService } from './buy-bundle.service';

describe('BuyBundleService', () => {
  let service: BuyBundleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyBundleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
