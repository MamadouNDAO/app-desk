import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogincheckPage } from './logincheck.page';

describe('LogincheckPage', () => {
  let component: LogincheckPage;
  let fixture: ComponentFixture<LogincheckPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LogincheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
