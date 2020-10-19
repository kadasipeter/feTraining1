import { Injectable } from '@angular/core';
import { WorkItemModel } from './work-item.model';
import { PriorityType } from './priority-type.enum';
import { WorkItemSummary } from './work-items-summary.model';
import { WorkItemWithPriority } from './work-item-with-priority.model';
import { WorkItemApiService } from './work-item-api.service';

@Injectable()
export class WorkItemService {

    constructor(private workItemApiService: WorkItemApiService) { }

    create500WorkItems(): WorkItemModel[] {
        var ret: WorkItemModel[] = [];

        this.workItemApiService.getAllItems()
            .subscribe((items: WorkItemModel[]) => {
                ret = items;
            });

        return ret;
    }

    createWorkItem(description: string): WorkItemModel {
        let ret: WorkItemModel;

        this.workItemApiService.createWorkItem(description)
            .subscribe((item: WorkItemModel) => {
                ret = item;
            });

        return ret;
    }

    getItemsSummary(items: WorkItemModel[]): WorkItemSummary[] {
        var ret: WorkItemSummary[] = [];
        let map = new Map<number, number>();

        items.forEach(i => {
            let priority: number = this.calculatePriority(i.Value);
            if (map.has(priority)) {
                map.set(priority, map.get(priority) + 1);
            }
            else {
                map.set(priority, 1);
            }
        });

        map.forEach((value: number, key: number) => {
            var summaryItem: WorkItemSummary = new WorkItemSummary();
            summaryItem.Id = key;
            summaryItem.Count = value;
            summaryItem.Priority = key;
            summaryItem.Description = "Priority " + PriorityType[key] + ":  ";
            ret.push(summaryItem)
        });

        return ret.sort((x, y) => x.Id > y.Id ? 1 : -1);
    }

    calculatePriority(input: number): PriorityType {
        return input > 5 ? PriorityType.High : PriorityType.Low;
    }

    getPriorityString(value: number): string {
        return PriorityType[value];
    }

    filterItems(items: WorkItemModel[], filter: string): WorkItemModel[] {
        if (filter === "") {
            return items;
        }
        else {
            return items.filter(x => this.matchesFilter(x.Description, filter));
        }
    }

    private matchesFilter(value: string, filter: string): boolean {
        return value.includes(filter);
    }
}

