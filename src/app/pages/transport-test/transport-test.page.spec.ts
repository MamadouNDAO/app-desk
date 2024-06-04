import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportTestPage } from './transport-test.page';

describe('TransportTestPage', () => {
  let component: TransportTestPage;
  let fixture: ComponentFixture<TransportTestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransportTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
