import { TestBed } from '@angular/core/testing';

import { GetAdminBundlesService } from './get-admin-bundles.service';

describe('GetAdminBundlesService', () => {
  let service: GetAdminBundlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAdminBundlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
