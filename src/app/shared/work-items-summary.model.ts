import { PriorityType } from './priority-type.enum';

export class WorkItemSummary {
    id: number;
    priority: PriorityType;
    description: string;
    count: number;
}