import { Action, createReducer, on } from '@ngrx/store';

import { AppState, initializeState } from '../shared/app-state';
import { WorkItemModel } from '../shared/work-item.model';

import * as WorkItemActions from './work-items.action';

export const ADD_ITEM = 'ADD_ITEM';

// export function addWorkItemsReducer(state: WorkItemModel[] = [], action): WorkItemModel[] {
//   switch (action.type) {
//     case ADD_ITEM:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(WorkItemActions.CreateWorkItemAction, ( s: AppState, item: WorkItemModel ) => {
    return {...s.items, items: [item, ...s.items] };
  })
);

export function addWorkItemsReducer(s: AppState | undefined, action: Action): AppState {
  return reducer(s, action);
}
