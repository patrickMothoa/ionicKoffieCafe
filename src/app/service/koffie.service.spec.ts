import { TestBed } from '@angular/core/testing';

import { KoffieService } from './koffie.service';

describe('KoffieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KoffieService = TestBed.get(KoffieService);
    expect(service).toBeTruthy();
  });
});
