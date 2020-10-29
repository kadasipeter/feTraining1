import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { WorkItemService } from 'src/app/shared/work-item.service';
import { WorkItemSummary } from 'src/app/shared/work-items-summary.model';
import { WorkItemWithPriority } from 'src/app/shared/work-item-with-priority.model';

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent {

    @Input() filteredItems: WorkItemWithPriority[] = [];
    @Input() summaryItems: WorkItemSummary[] = [];

    @Output() filterItems: EventEmitter<string> = new EventEmitter();

    onFilterItems(value: string) {
        this.filterItems.emit(value);
    }
}
