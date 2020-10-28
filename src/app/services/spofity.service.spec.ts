import { TestBed } from '@angular/core/testing';

import { SpofityService } from './spofity.service';

describe('SpofityService', () => {
  let service: SpofityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpofityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
