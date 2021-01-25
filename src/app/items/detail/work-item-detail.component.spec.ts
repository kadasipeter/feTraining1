import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { of } from 'rxjs';

import { WorkItemService } from 'src/app/core/work-item.service';
import { WorkItemDetailComponent as WorkItemDetailComponent } from './work-item-detail.component';

const workItemServiceMock = jasmine.createSpyObj('WorkItemService', ['getWorkItem']);
workItemServiceMock.getWorkItem.and.returnValue(of());

describe('ItemDetailComponent', () => {
  let component: WorkItemDetailComponent;
  let fixture: ComponentFixture<WorkItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WorkItemDetailComponent
      ],
      providers: [
        { provide: WorkItemService, useValue: workItemServiceMock },
        { provide: ActivatedRoute, useValue: {
          paramMap: of(convertToParamMap({ id: '1' })),
          snapshot: { paramMap: convertToParamMap({ id: '1' }) }
        } }
      ]})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
