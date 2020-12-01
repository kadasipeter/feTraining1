import { createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppState } from './app-state';
import { WorkItem as WorkItem } from '../core/work-item.model';

export const selectItems = (state: {items: AppState}) => state.items.items;

export const selectItemById = createSelector(
  selectItems,
  (items: WorkItem[], id: number) => items.find(p => p.id === id));

export const selectAll = createSelector(selectItems, _ => _);

@Injectable({
  providedIn: 'root'
})
export class WorkItemSelectorsService {

  constructor(private store: Store<{items: AppState}>) {
  }

  getItem$(id: number): Observable<WorkItem> {
    return this.store.select(selectItemById, id);
  }

  getAllItems$(): Observable<WorkItem[]> {
    return this.store.select(selectAll);
}

}
