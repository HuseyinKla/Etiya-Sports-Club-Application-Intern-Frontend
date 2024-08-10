import { TestBed } from '@angular/core/testing';

import { GetAllLogsService } from './get-all-logs.service';

describe('GetAllLogsService', () => {
  let service: GetAllLogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllLogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
