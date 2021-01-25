import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { provideMockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';

import { ItemHelperService } from './item-helper.service';
import { WorkItem } from './work-item.model';
import { WorkItemService } from './work-item.service';
import { WorkItemSelectorsService } from '../state/items/work-items-selectors.service';

const fakeItems: WorkItem[] = [
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

const fakeItem: WorkItem = fakeItems[0];

describe('ValueService', () => {
  const helperServiceMock = jasmine.createSpyObj('item-helper-service', ['generateWorkItem']);
  helperServiceMock.generateWorkItem.and.returnValue(fakeItem);

  const WorkItemSelectorsServiceMock = jasmine.createSpyObj('WorkItemSelectorsService', ['getAllItems$', 'getItem$'], []);
  WorkItemSelectorsServiceMock.getAllItems$.and.returnValue(of(fakeItem));
  WorkItemSelectorsServiceMock.getItem$.and.returnValue(of(fakeItem));

  let service: WorkItemService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot([], {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      })
    ],
    providers: [
      {
        provide: ItemHelperService,
        useValue: helperServiceMock
      },
      provideMockStore,
      {
        provide: WorkItemSelectorsService,
        useValue: WorkItemSelectorsServiceMock
      }
    ]
  }));

  beforeEach(() => {
    service = TestBed.inject(WorkItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get work item', () => {
    expect(service.getWorkItem(1)).toBe(fakeItem);
  });

});
