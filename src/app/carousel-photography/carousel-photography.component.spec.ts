import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPhotographyComponent } from './carousel-photography.component';

describe('CarouselPhotographyComponent', () => {
  let component: CarouselPhotographyComponent;
  let fixture: ComponentFixture<CarouselPhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselPhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselPhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
