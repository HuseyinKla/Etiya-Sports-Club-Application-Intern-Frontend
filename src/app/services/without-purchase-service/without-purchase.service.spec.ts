import { TestBed } from '@angular/core/testing';

import { WithoutPurchaseService } from './without-purchase.service';

describe('WithoutPurchaseService', () => {
  let service: WithoutPurchaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WithoutPurchaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
