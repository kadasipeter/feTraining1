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
        let ret: WorkItemModel[] = [];

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
        let ret: WorkItemSummary[] = [];
        let map: Map<number, number> = new Map<number, number>();

        items.forEach(i => {
            let priority: number = this.calculatePriority(i.value);
            if (map.has(priority)) {
                map.set(priority, map.get(priority) + 1);
            }
            else {
                map.set(priority, 1);
            }
        });

        map.forEach((value: number, key: number) => {
            let summaryItem: WorkItemSummary = {
                id: key,
                count: value,
                priority: key,
                description: "Priority " + PriorityType[key] + ":  "
            }
            ret = [summaryItem, ...ret];
        });

        return ret;
    }

    getItemWithPriority(item: WorkItemModel): WorkItemWithPriority {
        let ret: WorkItemWithPriority = {
            description: item.description,
            id: item.id,
            value: item.value,
            priority: this.calculatePriority(item.value)
        }

        return ret;
    }


    private calculatePriority(input: number): PriorityType {
        return input > 5 ? PriorityType.High : PriorityType.Low;
    }

    getPriorityString(value: number): string {
        return PriorityType[value];
    }

    filterItems(items: WorkItemWithPriority[], filter: string): WorkItemWithPriority[] {
        if (filter === "") {
            return items;
        }
        else {
            return items.filter(x => this.matchesFilter(x.description, filter));
        }
    }

    private matchesFilter(value: string, filter: string): boolean {
        return value.includes(filter);
    }
}

