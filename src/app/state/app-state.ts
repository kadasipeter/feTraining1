import { WorkItem } from '../core/work-item.model';

export interface AppState {
  readonly items: WorkItem[];
}

export const initializeState: AppState = {
   items: [] as WorkItem[] };
