import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPhotographySectionsComponent } from './portfolio-photography-sections.component';

describe('PortfolioPhotographySectionsComponent', () => {
  let component: PortfolioPhotographySectionsComponent;
  let fixture: ComponentFixture<PortfolioPhotographySectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPhotographySectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPhotographySectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
