import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBundleComponent } from './my-bundle.component';

describe('MyBundleComponent', () => {
  let component: MyBundleComponent;
  let fixture: ComponentFixture<MyBundleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyBundleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
