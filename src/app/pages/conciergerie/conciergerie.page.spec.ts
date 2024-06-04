import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConciergeriePage } from './conciergerie.page';

describe('ConciergeriePage', () => {
  let component: ConciergeriePage;
  let fixture: ComponentFixture<ConciergeriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConciergeriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
