import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDesignComponent } from './portfolio-design.component';

describe('PortfolioDesignComponent', () => {
  let component: PortfolioDesignComponent;
  let fixture: ComponentFixture<PortfolioDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
