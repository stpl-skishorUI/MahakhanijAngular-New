import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterstateMineralTransportComponent } from './interstate-mineral-transport.component';

describe('InterstateMineralTransportComponent', () => {
  let component: InterstateMineralTransportComponent;
  let fixture: ComponentFixture<InterstateMineralTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterstateMineralTransportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterstateMineralTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
