import { TestBed } from '@angular/core/testing';

import { QqService } from './qq.service';

describe('QqService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QqService = TestBed.get(QqService);
    expect(service).toBeTruthy();
  });
});
