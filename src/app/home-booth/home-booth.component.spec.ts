import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBoothComponent } from './home-booth.component';

describe('HomeBoothComponent', () => {
  let component: HomeBoothComponent;
  let fixture: ComponentFixture<HomeBoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
