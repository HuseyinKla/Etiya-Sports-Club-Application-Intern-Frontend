import { TestBed } from '@angular/core/testing';

import { CreateProgressService } from './create-progress.service';

describe('CreateProgressService', () => {
  let service: CreateProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
