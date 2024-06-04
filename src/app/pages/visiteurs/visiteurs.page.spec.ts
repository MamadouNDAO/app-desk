import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisiteursPage } from './visiteurs.page';

describe('VisiteursPage', () => {
  let component: VisiteursPage;
  let fixture: ComponentFixture<VisiteursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VisiteursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
