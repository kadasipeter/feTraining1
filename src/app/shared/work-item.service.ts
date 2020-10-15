import { Injectable } from '@angular/core';
import { WorkItemModel } from './work-item.model';
import { WorkItemsSummary } from './work-items-summary.model';

@Injectable()
export class WorkItemService {

    private workItemCounter: number = 0;

    constructor() { }

    CreateWorkItem(): WorkItemModel {
        var ret = new WorkItemModel;
        this.workItemCounter++;
        ret.Id = this.workItemCounter;
        ret.Description = this.randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        ret.Priority = this.randomPriority();
        return ret;
    }

    Create500WorkItems(): WorkItemModel[] {
        var ret: WorkItemModel[] = [];

        for (let i = 0; i < 500; i++) {
            ret.push(this.CreateWorkItem());
        }

        return ret;
    }

    private randomString(length: number, chars: string): string {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    private randomPriority(): number {
        return Math.floor(Math.random() * 9 + 1);
    }

    public GetItemsSummary(items: WorkItemModel[]): WorkItemsSummary[] {
        var ret: WorkItemsSummary[] = [];
        let map = new Map<number, number>();

        items.forEach(element => {
            if (map.has(element.Priority)) {
                map.set(element.Priority, map.get(element.Priority) + 1);
            }
            else {
                map.set(element.Priority, 1);
            }
        });

        map.forEach((value: number, key: number) => {
            var summaryItem: WorkItemsSummary = new WorkItemsSummary();
            summaryItem.Id = key;
            summaryItem.Count = value;
            summaryItem.TypeDescription = "Pr." + key + ":  ";
            ret.push(summaryItem)
        });

        return ret.sort((x, y) => x.Id > y.Id ? 1 : -1);
    }
}