import { PipeTransform, Pipe } from '@angular/core';

import { PriorityType } from '../core/priority-type.enum';
import { WorkItem } from '../core/work-item.model';
import { WorkItemSummary } from '../core/work-items-summary.model';

@Pipe({ name: 'getSummaryItems' })
export class GetSummaryItemsPipe implements PipeTransform {

    transform(items: WorkItem[], ...args: any[]): WorkItemSummary[] {
        let ret: WorkItemSummary[] = [];
        const map: Map<number, number> = new Map<number, number>();

        items.forEach(i => {
            const priority: number = this.calculatePriority(i.value);
            if (map.has(priority)) {
                map.set(priority, map.get(priority) + 1);
            }
            else {
                map.set(priority, 1);
            }
        });

        map.forEach((value: number, key: number) => {
            const summaryItem: WorkItemSummary = {
                id: key,
                count: value,
                priority: key,
                description: 'Priority ' + PriorityType[key] + ':  '
            };

            ret = [summaryItem, ...ret];
        });

        return ret.sort((a, b) => a.priority - b.priority);
    }

    private calculatePriority(input: number): PriorityType {
        return input > 5 ? PriorityType.High : PriorityType.Low;
    }

}
