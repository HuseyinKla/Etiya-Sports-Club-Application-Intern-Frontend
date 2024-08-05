import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleModalComponent } from './bundle-modal.component';

describe('BundleModalComponent', () => {
  let component: BundleModalComponent;
  let fixture: ComponentFixture<BundleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundleModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
