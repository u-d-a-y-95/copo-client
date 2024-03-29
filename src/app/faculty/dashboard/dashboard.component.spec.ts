import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: FacultyDashboardComponent;
  let fixture: ComponentFixture<FacultyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
