import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppState } from '../app-state';
import { WorkItem as WorkItem } from '../../core/work-item.model';

const selectWorkItemsFeature = createFeatureSelector<{items: AppState}>('items');

const selectProjectDetail = createSelector(
    selectWorkItemsFeature,
    state => state.items.items
);

export const selectItemById = createSelector(
  selectProjectDetail,
  (items: WorkItem[], id: number) => items.find(p => p.id === id));

export const selectAll = createSelector(selectProjectDetail, _ => _);

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
