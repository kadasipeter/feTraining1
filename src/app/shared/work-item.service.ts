import { Injectable } from '@angular/core';
import { WorkItemModel } from './work-item.model';
import { ItemHelperService } from './item-helper.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WorkItemService {

    items$: Observable<WorkItemModel[]>;
    private itemsSubject: BehaviorSubject<WorkItemModel[]>;
    private items: WorkItemModel[] = [];

    constructor(private workItemApiService: ItemHelperService) {
        this.createItems();
        this.itemsSubject = new BehaviorSubject(this.items);
        this.items$ = this.itemsSubject.asObservable();
    }

    private createItems(): void {
        this.items = this.workItemApiService.getAllItems();
    }

    createWorkItem(description: string, timestamp: Date): void {
      this.items = [this.workItemApiService.createWorkItem(description, timestamp), ...this.items];
      this.itemsSubject.next(this.items);
    }

    getWorkItem(id: number): WorkItemModel {
        return this.items.filter(item => item.id === id)[0];
    }
}

