import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDesignComponent } from './carousel-design.component';

describe('CarouselDesignComponent', () => {
  let component: CarouselDesignComponent;
  let fixture: ComponentFixture<CarouselDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
