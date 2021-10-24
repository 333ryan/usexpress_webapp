import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewLoansComponent } from './review-loans.component';

describe('ReviewLoansComponent', () => {
  let component: ReviewLoansComponent;
  let fixture: ComponentFixture<ReviewLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
