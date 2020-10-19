import { Injectable } from '@angular/core';
import { WorkItemModel } from './work-item.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class WorkItemApiService {

    private workItemCounter: number = 0;

    getAllItems(): Observable<WorkItemModel[]> {
        var ret: WorkItemModel[] = [];

        for (let i = 0; i < 500; i++) {
            ret.push(this.generateWorkItem(""));
        }

        return of(ret);
    }

    createWorkItem(description: string): Observable<WorkItemModel> {
        var ret = this.generateWorkItem(description);
        return of(ret);
    }

    private generateWorkItem(description: string): WorkItemModel {
        var ret = new WorkItemModel;
        this.workItemCounter++;
        ret.Id = this.workItemCounter;
        if (description === "") {
            ret.Description = this.randomString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        } else {
            ret.Description = description;
        }
        ret.Value = this.randomPriority();
        return ret;
    }

    private randomString(length: number, chars: string): string {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    private randomPriority(): number {
        return Math.floor(Math.random() * 10 + 1);
    }


}