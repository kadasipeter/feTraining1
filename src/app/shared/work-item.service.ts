import { Injectable } from '@angular/core';
import { WorkItemModel } from './work-item.model';
import { PriorityType } from './priority-type.enum';
import { WorkItemSummary } from './work-items-summary.model';
import { WorkItemWithPriority } from './work-item-with-priority.model';
import { WorkItemApiService } from './work-item-api.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class WorkItemService {


    private items: WorkItemWithPriority[] = [];
    private actualFilter: string = "";

    constructor(private workItemApiService: WorkItemApiService) {
        this.create5000WorkItems();
    }

    private create5000WorkItems() {
        let ret: WorkItemModel[] = [];

        this.workItemApiService.getAllItems()
            .subscribe((i: WorkItemModel[]) => i.forEach(e => this.items.push(this.getItemWithPriority(e))));
    }

    createWorkItem(description: string, timestamp: Date) {
        let ret: WorkItemModel;

        this.workItemApiService.createWorkItem(description)
            .subscribe((item: WorkItemModel) => {
                item.timestamp = timestamp;
                this.items = [this.getItemWithPriority(item), ...this.items];
            });
    }

    getItemsSummary(items: WorkItemWithPriority[]): Observable<WorkItemSummary[]> {
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

        return of(ret);
    }

    getAllItems(): Observable<WorkItemWithPriority[]> {
        return this.actualFilter === ""
            ? of(this.items)
            : of(this.items.filter(x => this.matchesFilter(x.description)));
    }

    getWorkItem(id: number): Observable<WorkItemWithPriority> {
        return of(this.items.filter(item => item.id === id)[0]);
    }

    private getItemWithPriority(item: WorkItemModel): WorkItemWithPriority {
        let ret: WorkItemWithPriority = {
            description: item.description,
            id: item.id,
            value: item.value,
            timestamp: item.timestamp,
            priority: this.calculatePriority(item.value)
        }

        return ret;
    }

    private calculatePriority(input: number): PriorityType {
        return input > 5 ? PriorityType.High : PriorityType.Low;
    }

    setFilter(filter: string) {
        this.actualFilter = filter;
    }

    private matchesFilter(value: string): boolean {
        return value.includes(this.actualFilter);
    }
}

