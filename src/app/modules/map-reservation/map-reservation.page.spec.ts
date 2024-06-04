import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapReservationPage } from './map-reservation.page';

describe('MapReservationPage', () => {
  let component: MapReservationPage;
  let fixture: ComponentFixture<MapReservationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MapReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
