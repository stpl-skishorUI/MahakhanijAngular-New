import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesseeLicenseRegisterComponent } from './lessee-license-register.component';

describe('LesseeLicenseRegisterComponent', () => {
  let component: LesseeLicenseRegisterComponent;
  let fixture: ComponentFixture<LesseeLicenseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesseeLicenseRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesseeLicenseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
