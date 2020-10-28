import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { WorkItemModel } from 'src/app/shared/work-item.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WorkItemService } from 'src/app/shared/work-item.service';
import { WorkItemSummary } from 'src/app/shared/work-items-summary.model';
import { WorkItemWithPriority } from 'src/app/shared/work-item-with-priority.model';

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    @Input() items: WorkItemWithPriority[];
    @ViewChild('itemsDiv') itemsDiv: ElementRef<HTMLElement>;

    filteredItems: WorkItemWithPriority[] = [];
    summaryItems: WorkItemSummary[] = [];
    actualFilter: string = "";

    constructor(private workItemsService: WorkItemService) {
    }

    ngOnInit(): void {
        this.filteredItems = this.items;
        this.loadSummaryItems();
    }

    loadSummaryItems() {
        this.summaryItems = this.workItemsService.getItemsSummary(this.filteredItems);
    }

    onFilterItems(filter: string) {
        if (filter !== this.actualFilter) {
            this.actualFilter = filter;
            this.filteredItems = this.workItemsService.filterItems(this.items, this.actualFilter);
        }
        this.loadSummaryItems();
    }
}
