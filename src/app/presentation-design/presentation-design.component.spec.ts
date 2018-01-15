import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationDesignComponent } from './presentation-design.component';

describe('PresentationDesignComponent', () => {
  let component: PresentationDesignComponent;
  let fixture: ComponentFixture<PresentationDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
