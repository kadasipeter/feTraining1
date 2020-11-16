import { Injectable } from '@angular/core';
import { WorkItemModel } from './work-item.model';
import { WorkItemApiService } from './work-item-api.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WorkItemService {

    items$: Observable<WorkItemModel[]>;
    private itemsSubject: BehaviorSubject<WorkItemModel[]>;
    private items: WorkItemModel[] = [];

    constructor(private workItemApiService: WorkItemApiService) {
        this.createItems();
        this.itemsSubject = new BehaviorSubject(this.items);
        this.items$ = this.itemsSubject.asObservable();
    }

    private createItems() {
        this.workItemApiService.getAllItems().subscribe(_ => this.items = _);
    }

    createWorkItem(description: string, timestamp: Date) {
        this.workItemApiService.createWorkItem(description, timestamp)
            .subscribe((item: WorkItemModel) => {
                this.items = [item, ...this.items];
                this.itemsSubject.next(this.items);
            });
    }

    getWorkItem(id: number): WorkItemModel {
        return this.items.filter(item => item.id === id)[0];
    }
}

