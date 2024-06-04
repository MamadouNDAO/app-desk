import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConstatsPage } from './constats.page';

describe('ConstatsPage', () => {
  let component: ConstatsPage;
  let fixture: ComponentFixture<ConstatsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConstatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
