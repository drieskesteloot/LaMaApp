import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhotographyComponent } from './home-photography.component';

describe('HomePhotographyComponent', () => {
  let component: HomePhotographyComponent;
  let fixture: ComponentFixture<HomePhotographyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePhotographyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePhotographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
