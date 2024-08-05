import { TestBed } from '@angular/core/testing';

import { BundleModalService } from './bundle-modal.service';

describe('BundleModalService', () => {
  let service: BundleModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BundleModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
