import { TestBed } from '@angular/core/testing';

import { TutorsServiceService } from './tutors-service.service';

describe('TutorsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TutorsServiceService = TestBed.get(TutorsServiceService);
    expect(service).toBeTruthy();
  });
});
