import { TestBed, inject } from '@angular/core/testing';

import { ChooseNewsService } from './choose-news.service';

describe('ChooseNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChooseNewsService]
    });
  });

  it('should be created', inject([ChooseNewsService], (service: ChooseNewsService) => {
    expect(service).toBeTruthy();
  }));
});
