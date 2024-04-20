import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Сума ряду значення x = 0.1, y = 0.1816', () => {
    let x = 0.1;
    let y = 0.1816;
    let y1 = service.getSeries(x);
    expect(y.toFixed(4)).toBe(y1.toFixed(4));
  });
});
