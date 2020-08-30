import { TestBed } from '@angular/core/testing';

import { EstructuraService } from './estructura.service';

describe('EstructuraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstructuraService = TestBed.get(EstructuraService);
    expect(service).toBeTruthy();
  });
});
