import { createAction, createSelector, props } from '@ngrx/store';

import { WorkItem } from '../core/work-item.model';

export const CreateWorkItemAction = createAction(
  '[WorkItemModel] - Create WorkItemModel',
  props<WorkItem>()
);


