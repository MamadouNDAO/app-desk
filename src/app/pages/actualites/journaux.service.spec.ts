import { TestBed } from '@angular/core/testing';

import { JournauxService } from './journaux.service';

describe('JournauxService', () => {
  let service: JournauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
