import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { StoreModule } from '@ngrx/store';
import { of } from 'rxjs';

import { WorkItemService } from '../core/work-item.service';
import { SharedModule } from '../shared/shared.module';
import { SidebarFilterComponent } from './sidebar/sidebar-filter/sidebar-filter.component';
import { SidebarFooterComponent } from './sidebar/sidebar-footer/sidebar-footer.component';
import { SidebarItemsComponent } from './sidebar/sidebar-items/sidebar-items.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { WorkItemsComponent } from './work-items.component';

describe('WorkItemComponent', () => {
  let component: WorkItemsComponent;
  let fixture: ComponentFixture<WorkItemsComponent>;
  const workItemServiceMock = jasmine.createSpyObj('WorkItemService', [], { items$: of([]) });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WorkItemsComponent,
        SidebarComponent,
        SidebarFilterComponent,
        SidebarItemsComponent,
        SidebarFooterComponent
      ],
      imports:
      [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        StoreModule.forRoot({}),
        SharedModule
      ],
      providers: [
        FormBuilder,
        { provide: WorkItemService, useValue: workItemServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
