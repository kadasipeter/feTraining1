import { Injectable } from '@angular/core';
import { WorkItemModel } from './work-item.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class ItemHelperService {

    private workItemCounter = 1;

    getAllItems(count: number = 5000): WorkItemModel[] {
        let ret: WorkItemModel[] = [];

        for (let i = 0; i < count; i++) {
            const newItem = this.generateWorkItem('');
            ret = [newItem, ...ret];
        }

        return ret;
    }

    createWorkItem(description: string, timestamp: Date): WorkItemModel {
        const workItem = this.generateWorkItem(description);
        workItem.timestamp = timestamp;
        return workItem;
    }

    private generateWorkItem(description: string): WorkItemModel {
        return {
            id: this.workItemCounter++,
            description: description === ''
              ? this.randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
              : description,
            value: this.randomPriority(),
            timestamp: new Date()
        };
    }

    private randomString(length: number, chars: string): string {
        let result = '';
        for (let i = length; i > 0; --i) { result += chars[Math.floor(Math.random() * chars.length)]; }
        return result;
    }

    private randomPriority(): number {
        return Math.floor(Math.random() * 10 + 1);
    }
}
