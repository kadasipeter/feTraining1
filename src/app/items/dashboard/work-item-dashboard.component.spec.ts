import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { WorkItemDashboardComponent } from './work-item-dashboard.component';

describe('WorkItemDashboardComponent', () => {
  let component: WorkItemDashboardComponent;
  let fixture: ComponentFixture<WorkItemDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WorkItemDashboardComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        {provide: Router, useValue: {}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkItemDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
