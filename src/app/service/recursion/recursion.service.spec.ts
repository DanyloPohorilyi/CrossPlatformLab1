import { TestBed } from '@angular/core/testing';

import { RecursionService } from './recursion.service';

describe('RecursionService', () => {
  let service: RecursionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecursionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Сума ряду значення x = 0.1, y = 0.1816', () => {
    let x = 0.1;
    let y = 1.0;
    let y1 = 1.0;
    service.getRecursion(x, 1, 1, 1, y1);
    expect(y.toFixed(4)).toBe(y1.toFixed(4));
  });
});
