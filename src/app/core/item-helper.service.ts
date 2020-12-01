import { Injectable } from '@angular/core';
import { WorkItem } from './work-item.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemHelperService {

    private workItemCounter = 1;

    createWorkItem(description: string, timestamp: Date): WorkItem {
        const workItem = this.generateWorkItem(description);
        workItem.timestamp = timestamp;
        return workItem;
    }

    generateWorkItem(description: string): WorkItem {
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
