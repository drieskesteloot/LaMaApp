import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioBoothComponent } from './portfolio-booth.component';

describe('PortfolioBoothComponent', () => {
  let component: PortfolioBoothComponent;
  let fixture: ComponentFixture<PortfolioBoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioBoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
