import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanMapPage } from './plan-map.page';

describe('PlanMapPage', () => {
  let component: PlanMapPage;
  let fixture: ComponentFixture<PlanMapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
