import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationBullePage } from './reservation-bulle.page';

describe('ReservationBullePage', () => {
  let component: ReservationBullePage;
  let fixture: ComponentFixture<ReservationBullePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReservationBullePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
