import { TestBed } from '@angular/core/testing';

import { GetAllProgressesService } from './get-all-progresses.service';

describe('GetAllProgressesService', () => {
  let service: GetAllProgressesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllProgressesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
