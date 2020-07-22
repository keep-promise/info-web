import { TestBed } from '@angular/core/testing';

import { ClassmateService } from './classmate.service';

describe('ClassmateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClassmateService = TestBed.get(ClassmateService);
    expect(service).toBeTruthy();
  });
});
