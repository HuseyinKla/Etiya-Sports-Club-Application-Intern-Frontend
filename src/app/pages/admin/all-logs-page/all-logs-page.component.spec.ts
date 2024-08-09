import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLogsPageComponent } from './all-logs-page.component';

describe('AllLogsPageComponent', () => {
  let component: AllLogsPageComponent;
  let fixture: ComponentFixture<AllLogsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLogsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLogsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
