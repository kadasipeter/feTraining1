import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { WorkItem } from 'src/app/core/work-item.model';
import { WorkItemService } from 'src/app/core/work-item.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarFilterComponent } from './sidebar-filter/sidebar-filter.component';
import { SidebarFooterComponent } from './sidebar-footer/sidebar-footer.component';
import { SidebarItemsComponent } from './sidebar-items/sidebar-items.component';
import { WorkItemComponent } from './sidebar-items/work-item/work-item.component';
import { SidebarComponent } from './sidebar.component';

const fakeItems: WorkItem[] =[
  {
    id: 1,
    value: 7,
    description: 'aaa',
    timestamp: new Date()
  },
  {
    id: 2,
    value: 8,
    description: 'abc',
    timestamp: new Date()
  },
  {
    id: 3,
    value: 9,
    description: 'xyz',
    timestamp: new Date()
  },
];

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  const workItemServiceMock = jasmine.createSpyObj('WorkItemService', [], { items$: of(fakeItems) });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SidebarComponent,
        SidebarFooterComponent,
        SidebarItemsComponent,
        SidebarFilterComponent,
        WorkItemComponent
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        FormsModule,
        SharedModule
      ],
      providers: [
        { provide: WorkItemService, useValue: workItemServiceMock},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort items by priority', () => {
    expect(component.items.length).toBe(3);
    component.onFilterItems('a');
    expect(component.items.length).toBe(2);
  })
});
