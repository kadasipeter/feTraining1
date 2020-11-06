import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WorkItemWithPriority } from 'src/app/shared/work-item-with-priority.model';

@Component({
    selector: 'invoice-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'invoice-item.component.html',
    styleUrls: ['invoice-item.component.scss']
})
export class InvoiceItemComponent implements OnInit {

    @Input() item: WorkItemWithPriority;

    ngOnInit(): void {
    }
}
