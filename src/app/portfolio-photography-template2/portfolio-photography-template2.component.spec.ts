import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPhotographyTemplate2Component } from './portfolio-photography-template2.component';

describe('PortfolioPhotographyTemplate2Component', () => {
  let component: PortfolioPhotographyTemplate2Component;
  let fixture: ComponentFixture<PortfolioPhotographyTemplate2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPhotographyTemplate2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPhotographyTemplate2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
