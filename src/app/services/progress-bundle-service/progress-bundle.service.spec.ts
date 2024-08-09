import { TestBed } from '@angular/core/testing';

import { ProgressBundleService } from './progress-bundle.service';

describe('ProgressBundleService', () => {
  let service: ProgressBundleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressBundleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
