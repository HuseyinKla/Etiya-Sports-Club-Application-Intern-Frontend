import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBundlePageComponent } from './create-bundle-page.component';

describe('CreateBundlePageComponent', () => {
  let component: CreateBundlePageComponent;
  let fixture: ComponentFixture<CreateBundlePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBundlePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBundlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
