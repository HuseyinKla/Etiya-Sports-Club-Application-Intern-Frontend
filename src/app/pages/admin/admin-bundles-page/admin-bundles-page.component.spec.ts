import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBundlesPageComponent } from './admin-bundles-page.component';

describe('AdminBundlesPageComponent', () => {
  let component: AdminBundlesPageComponent;
  let fixture: ComponentFixture<AdminBundlesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBundlesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBundlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
