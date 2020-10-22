import { WorkItemModel } from './work-item.model';
import { PriorityType } from './priority-type.enum';

export class WorkItemWithPriority implements WorkItemModel {
    id: number;
    value: number;
    description: string;
    priority: PriorityType;
}