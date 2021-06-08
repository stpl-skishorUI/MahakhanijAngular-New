import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToParticipateComponent } from './how-to-participate.component';

describe('HowToParticipateComponent', () => {
  let component: HowToParticipateComponent;
  let fixture: ComponentFixture<HowToParticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToParticipateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToParticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
