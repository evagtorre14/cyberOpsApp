import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Energia2Component } from './energia2.component';

describe('Energia2Component', () => {
  let component: Energia2Component;
  let fixture: ComponentFixture<Energia2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Energia2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Energia2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
