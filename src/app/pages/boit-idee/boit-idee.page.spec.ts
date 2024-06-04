import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoitIdeePage } from './boit-idee.page';

describe('BoitIdeePage', () => {
  let component: BoitIdeePage;
  let fixture: ComponentFixture<BoitIdeePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoitIdeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
