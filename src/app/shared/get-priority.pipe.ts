import { Pipe, PipeTransform } from '@angular/core';
import { WorkItemWithPriority } from './work-item-with-priority.model';
import { PriorityType } from './priority-type.enum';

@Pipe({ name: 'getPriority' })
export class GetPriorityPipe implements PipeTransform {
    transform(value: WorkItemWithPriority): string {
        return value.value + ": " + PriorityType[value.priority]
    }
}