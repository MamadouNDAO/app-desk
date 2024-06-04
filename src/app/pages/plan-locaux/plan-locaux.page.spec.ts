import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanLocauxPage } from './plan-locaux.page';

describe('PlanLocauxPage', () => {
  let component: PlanLocauxPage;
  let fixture: ComponentFixture<PlanLocauxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlanLocauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
