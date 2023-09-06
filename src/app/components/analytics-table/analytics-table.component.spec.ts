import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsTableComponent } from './analytics-table.component';

describe('AnalyticsTableComponent', () => {
  let component: AnalyticsTableComponent;
  let fixture: ComponentFixture<AnalyticsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticsTableComponent]
    });
    fixture = TestBed.createComponent(AnalyticsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
