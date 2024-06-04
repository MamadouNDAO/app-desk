import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionConfortPage } from './gestion-confort.page';

describe('GestionConfortPage', () => {
  let component: GestionConfortPage;
  let fixture: ComponentFixture<GestionConfortPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GestionConfortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
