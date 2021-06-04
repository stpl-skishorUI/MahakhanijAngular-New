import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMineralsComponent } from './about-minerals.component';

describe('AboutMineralsComponent', () => {
  let component: AboutMineralsComponent;
  let fixture: ComponentFixture<AboutMineralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMineralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMineralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
