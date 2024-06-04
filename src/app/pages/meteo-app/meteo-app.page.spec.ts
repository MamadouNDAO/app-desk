import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeteoAppPage } from './meteo-app.page';

describe('MeteoAppPage', () => {
  let component: MeteoAppPage;
  let fixture: ComponentFixture<MeteoAppPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MeteoAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
