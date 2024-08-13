import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBundlesPageComponent } from './users-bundles-page.component';

describe('UsersBundlesPageComponent', () => {
  let component: UsersBundlesPageComponent;
  let fixture: ComponentFixture<UsersBundlesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersBundlesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersBundlesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
