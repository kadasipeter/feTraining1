import { PriorityType } from './priority-type.enum';

export interface WorkItemSummary {
  id: number;
  priority: PriorityType;
  description: string;
  count: number;
}
