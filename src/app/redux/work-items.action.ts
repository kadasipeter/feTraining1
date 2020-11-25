import { createAction, createSelector, props } from '@ngrx/store';
import { AppState } from '../shared/app-state';

import { WorkItemModel } from '../shared/work-item.model';

export const CreateWorkItemAction = createAction(
  '[WorkItemModel] - Create WorkItemModel',
  props<WorkItemModel>()
);

export const selectItems = (state: {items: AppState}) => state.items.items;

export const selectItemById = createSelector(
  selectItems,
  (items: WorkItemModel[], id: number) => items.find(p => p.id === id)
);
