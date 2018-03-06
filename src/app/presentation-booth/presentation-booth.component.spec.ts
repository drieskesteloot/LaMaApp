import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationBoothComponent } from './presentation-booth.component';

describe('PresentationBoothComponent', () => {
  let component: PresentationBoothComponent;
  let fixture: ComponentFixture<PresentationBoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationBoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
