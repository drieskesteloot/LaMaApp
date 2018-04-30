import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDesignSectionsComponent } from './portfolio-design-sections.component';

describe('PortfolioDesignSectionsComponent', () => {
  let component: PortfolioDesignSectionsComponent;
  let fixture: ComponentFixture<PortfolioDesignSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDesignSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDesignSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
