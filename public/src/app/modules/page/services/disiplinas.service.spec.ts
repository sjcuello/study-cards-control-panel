import { TestBed } from '@angular/core/testing';

import { DisiplinasService } from './disiplinas.service';

describe('DisiplinasService', () => {
  let service: DisiplinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisiplinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
