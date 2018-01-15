import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationPhotographyComponent } from './presentation-photography.component';

describe('PresentationPhotographyComponent', () => {
  let component: PresentationPhotographyComponent;
  let fixture: ComponentFixture<PresentationPhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationPhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
