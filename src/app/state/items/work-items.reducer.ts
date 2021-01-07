import { Action, createReducer, on } from '@ngrx/store';

import { AppState, initializeState } from '../app-state';
import { WorkItem } from '../../core/work-item.model';

import * as WorkItemActions from './work-items.action';

const reducer = createReducer(
  initializeState,
  on(WorkItemActions.CreateWorkItemAction, ( s: AppState, item: WorkItem ) => {
    return {...s.items, items: [item, ...s.items] };
  })
);

export function addWorkItemsReducer(s: AppState | undefined, action: Action): AppState {
  return reducer(s, action);
}
