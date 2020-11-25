import { WorkItemModel } from './work-item.model';

export interface AppState {
  readonly items: WorkItemModel[];
}

export const initializeState = (): AppState => {
  return { items: [] };
};
