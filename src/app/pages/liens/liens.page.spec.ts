import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LiensPage } from './liens.page';

describe('LiensPage', () => {
  let component: LiensPage;
  let fixture: ComponentFixture<LiensPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LiensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
