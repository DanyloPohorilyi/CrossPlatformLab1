import { TestBed } from '@angular/core/testing';

import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Табулювання значення x = y = 5', () => {
    let x = 5, y = 5;
    let xy = service.getTab(5);
    let y1: number | undefined = 5;
    y1 = xy.get(x);
    if (y1 !== undefined) {
      expect(y.toFixed(4)).toBe(y1.toFixed(4));
    }
  });
});
