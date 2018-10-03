import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Energia3Component } from './energia3.component';

describe('Energia3Component', () => {
  let component: Energia3Component;
  let fixture: ComponentFixture<Energia3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Energia3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Energia3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
