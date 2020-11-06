import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { WorkItemService } from 'src/app/shared/work-item.service';
import { WorkItemSummary } from 'src/app/shared/work-items-summary.model';
import { WorkItemWithPriority } from 'src/app/shared/work-item-with-priority.model';

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    @Input() filteredItems: WorkItemWithPriority[] = [];
    @Input() summaryItems: WorkItemSummary[] = [];

    constructor(
        private workItemsService: WorkItemService,
    ) { }

    ngOnInit() {
        this.refreshData();
    }

    onFilterItems(value: string) {
        this.workItemsService.setFilter(value);
        this.refreshData();
    }

    refreshData() {
        this.workItemsService.getAllItems().subscribe(items => this.filteredItems = items)
        this.workItemsService.getItemsSummary(this.filteredItems).subscribe(items => this.summaryItems = items);
    }
}
