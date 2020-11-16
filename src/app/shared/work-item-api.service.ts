import { Injectable } from '@angular/core';
import { WorkItemModel } from './work-item.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class WorkItemApiService {

    private workItemCounter: number = 1;

    getAllItems(count: number = 5000): Observable<WorkItemModel[]> {
        let ret: WorkItemModel[] = [];

        for (let i = 0; i < count; i++) {
            let newItem = this.generateWorkItem("");
            ret = [newItem, ...ret];
        }

        return of(ret);
    }

    createWorkItem(description: string, timestamp: Date): Observable<WorkItemModel> {
        let workItem = this.generateWorkItem(description);
        workItem.timestamp = timestamp;
        return of(workItem);
    }

    private generateWorkItem(description: string): WorkItemModel {
        let ret: WorkItemModel = {
            id: this.workItemCounter++,
            description: description === "" ? this.randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') : description,
            value: this.randomPriority(),
            timestamp: new Date()
        };

        return ret;
    }

    private randomString(length: number, chars: string): string {
        let result = '';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    private randomPriority(): number {
        return Math.floor(Math.random() * 10 + 1);
    }
}