import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from '../state/app-state';

import { WorkItemService } from "./work-item.service";

class StoreMock {
  select =  jasmine.createSpy().and.returnValue(of({}));
  dispatch = jasmine.createSpy();
}

// describe('ValueService', () => {
//   const helperServiceMock = jasmine.createSpyObj('item-helper-service', [], [])
//   const mockStore: Store<{ payload: AppState }> = new StoreMock();
//   const WorkItemSelectorsServiceMock = jasmine.createSpyObj('WorkItemSelectorsService', ['getAllItems$'], [])

//   let service: WorkItemService;

//   beforeEach(() => { service = new WorkItemService(helperServiceMock, mockStore, WorkItemSelectorsServiceMock); });

//   it('something', () => {
//     expect(service. ...).toBe('real value');
//   });
// });
