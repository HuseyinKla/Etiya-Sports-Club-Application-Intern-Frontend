import { TestBed } from '@angular/core/testing';

import { UsersBundleService } from './users-bundle.service';

describe('UsersBundleService', () => {
  let service: UsersBundleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersBundleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
