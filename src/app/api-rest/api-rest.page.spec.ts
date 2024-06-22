import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiRestPage } from './api-rest.page';

describe('ApiRestPage', () => {
  let component: ApiRestPage;
  let fixture: ComponentFixture<ApiRestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiRestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
