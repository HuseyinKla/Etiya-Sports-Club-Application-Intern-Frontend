import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingCoursesPageComponent } from './remaining-courses-page.component';

describe('RemainingCoursesPageComponent', () => {
  let component: RemainingCoursesPageComponent;
  let fixture: ComponentFixture<RemainingCoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemainingCoursesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemainingCoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
