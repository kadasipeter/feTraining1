import { Component, OnInit, Input } from '@angular/core';
import { WorkItemService } from 'src/app/shared/work-item.service';
import { WorkItemWithPriority } from 'src/app/shared/work-item-with-priority.model';

@Component({
    selector: 'invoice-item',
    templateUrl: 'invoice-item.component.html',
    styleUrls: ['invoice-item.component.scss']
})
export class InvoiceItemComponent implements OnInit {

    @Input() item: WorkItemWithPriority;

    constructor(private workItemService: WorkItemService) { }

    ngOnInit(): void {
    }

    getPriorityString(item): string {
        return item.Value + ": " + this.workItemService.getPriorityString(this.item.Priority);
    }

}
