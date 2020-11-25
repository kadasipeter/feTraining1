import { Injectable } from '@angular/core';
import { WorkItemModel } from './work-item.model';
import { ItemHelperService } from './item-helper.service';
import { Observable } from 'rxjs';
import { AppState } from './app-state';
import { select, Store } from '@ngrx/store';
import * as WorkItemActions from '../redux/work-items.action';

@Injectable({
    providedIn: 'root'
})
export class WorkItemService {

    items$: Observable<WorkItemModel[]>;

    constructor(private helperService: ItemHelperService, private store: Store<{ items: AppState }>) {
      this.createItems();
      this.items$ = store.select(x => x.items.items);
    }

    createWorkItem(description: string, timestamp: Date): void {
      const item = this.helperService.createWorkItem(description, timestamp);
      this.store.dispatch(WorkItemActions.CreateWorkItemAction(item));
    }

    getWorkItem(id: number): WorkItemModel {
      let foundItem: WorkItemModel;
      this.store.select(WorkItemActions.selectItemById, id).subscribe((item) => {foundItem = item; });
      return foundItem;
    }

    private createItems(count: number = 5000): void {
      for (let i = 0; i < count; i++) {
          const newItem = this.helperService.generateWorkItem('');
          this.store.dispatch(WorkItemActions.CreateWorkItemAction(newItem));
      }
    }
  }

