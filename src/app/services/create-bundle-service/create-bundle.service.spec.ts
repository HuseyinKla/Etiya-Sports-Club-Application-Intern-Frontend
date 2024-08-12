import { TestBed } from '@angular/core/testing';

import { CreateBundleService } from './create-bundle.service';

describe('CreateBundleService', () => {
  let service: CreateBundleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBundleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
