import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../state/app-state';
import { ItemHelperService } from './item-helper.service';
import { WorkItem } from './work-item.model';
import * as WorkItemActions from '../state/work-items.action';
import { WorkItemSelectorsService } from '../state/work-items-selectors.service';

@Injectable({
    providedIn: 'root'
})
export class WorkItemService {

    items$: Observable<WorkItem[]>;

    constructor(
      private helperService: ItemHelperService,
      private store: Store<{ payload: AppState }>,
      private workItemsSelectorsService: WorkItemSelectorsService) {
      this.createItems();
      this.items$ = workItemsSelectorsService.getAllItems$();
    }

    createWorkItem(description: string, timestamp: Date): void {
      const item = this.helperService.createWorkItem(description, timestamp);
      this.store.dispatch(WorkItemActions.CreateWorkItemAction(item));
    }

    getWorkItem(id: number): WorkItem {
      let foundItem: WorkItem;
      this.workItemsSelectorsService.getItem$(id).subscribe(_ => {foundItem = _; });
      return foundItem;
    }

    private createItems(count: number = 5000): void {
      for (let i = 0; i < count; i++) {
          const newItem = this.helperService.generateWorkItem('');
          this.store.dispatch(WorkItemActions.CreateWorkItemAction(newItem));
      }
    }
  }

