import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryProposalComponent } from './temporary-proposal.component';

describe('TemporaryProposalComponent', () => {
  let component: TemporaryProposalComponent;
  let fixture: ComponentFixture<TemporaryProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporaryProposalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporaryProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
