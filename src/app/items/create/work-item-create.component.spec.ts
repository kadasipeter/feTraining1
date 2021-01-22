import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { WorkItemService } from 'src/app/core/work-item.service';
import { WorkItemCreateComponent } from './work-item-create.component';

const workItemsServiceMock = jasmine.createSpyObj(
  'WorkItemService',
  ['createWorkItem']
);

workItemsServiceMock.createWorkItem.and.returnValue(of({}));

describe('WorkItemCreateComponent', () => {
  let component: WorkItemCreateComponent;
  let fixture: ComponentFixture<WorkItemCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [FormBuilder, {provide: WorkItemService, useValue: workItemsServiceMock}],
      declarations: [ WorkItemCreateComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkItemCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
