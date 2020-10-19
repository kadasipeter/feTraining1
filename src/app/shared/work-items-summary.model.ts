import { PriorityType } from './priority-type.enum';

export class WorkItemSummary {
    Id: number;
    Priority: PriorityType;
    Description: string;
    Count: number;
}