import { WorkItemModel } from './work-item.model';
import { PriorityType } from './priority-type.enum';

export class WorkItemWithPriority implements WorkItemModel {
    Id: number;
    Value: number;
    Description: string;
    Priority: PriorityType;
}