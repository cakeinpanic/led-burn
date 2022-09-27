import { TestBed } from '@angular/core/testing';

import { StageStoreService } from './stage-store.service';

describe('StageStoreService', () => {
  let service: StageStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StageStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
