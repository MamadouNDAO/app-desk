import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartographiePage } from './cartographie.page';

describe('CartographiePage', () => {
  let component: CartographiePage;
  let fixture: ComponentFixture<CartographiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CartographiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
