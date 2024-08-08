import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongProgressInitModalComponent } from './wrong-progress-init-modal.component';

describe('WrongProgressInitModalComponent', () => {
  let component: WrongProgressInitModalComponent;
  let fixture: ComponentFixture<WrongProgressInitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongProgressInitModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrongProgressInitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
