import { TestBed } from '@angular/core/testing';

import { FlamingoStoreService } from './flamingo-store.service';

describe('FlamingoStoreService', () => {
  let service: FlamingoStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlamingoStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
