import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMineralFoundationComponent } from './district-mineral-foundation.component';

describe('DistrictMineralFoundationComponent', () => {
  let component: DistrictMineralFoundationComponent;
  let fixture: ComponentFixture<DistrictMineralFoundationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictMineralFoundationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictMineralFoundationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
