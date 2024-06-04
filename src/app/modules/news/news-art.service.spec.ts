import { TestBed } from '@angular/core/testing';

import { NewsArtService } from './news-art.service';

describe('NewsArtService', () => {
  let service: NewsArtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsArtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
