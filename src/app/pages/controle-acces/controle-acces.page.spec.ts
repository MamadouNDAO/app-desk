import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControleAccesPage } from './controle-acces.page';

describe('ControleAccesPage', () => {
  let component: ControleAccesPage;
  let fixture: ComponentFixture<ControleAccesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ControleAccesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
