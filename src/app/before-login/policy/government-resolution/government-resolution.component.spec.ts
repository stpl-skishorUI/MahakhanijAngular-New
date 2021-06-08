import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentResolutionComponent } from './government-resolution.component';

describe('GovernmentResolutionComponent', () => {
  let component: GovernmentResolutionComponent;
  let fixture: ComponentFixture<GovernmentResolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentResolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentResolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
