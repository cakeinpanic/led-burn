import { TestBed } from '@angular/core/testing';

import { FlamingoStore } from './flamingo-store.service';

describe('FlamingoStoreService', () => {
  let service: FlamingoStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlamingoStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
