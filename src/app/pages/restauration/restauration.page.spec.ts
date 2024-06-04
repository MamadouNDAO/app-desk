import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestaurationPage } from './restauration.page';

describe('RestaurationPage', () => {
  let component: RestaurationPage;
  let fixture: ComponentFixture<RestaurationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestaurationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
