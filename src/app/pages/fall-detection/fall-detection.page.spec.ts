import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FallDetectionPage } from './fall-detection.page';

describe('FallDetectionPage', () => {
  let component: FallDetectionPage;
  let fixture: ComponentFixture<FallDetectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FallDetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
