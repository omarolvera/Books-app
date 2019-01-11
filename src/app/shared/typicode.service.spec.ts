/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TypicodeService } from './typicode.service';

describe('Service: Typicode', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypicodeService]
    });
  });

  it('should ...', inject([TypicodeService], (service: TypicodeService) => {
    expect(service).toBeTruthy();
  }));
});
