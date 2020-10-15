import { Component, OnInit, Input } from '@angular/core';
import { WorkItemModel } from 'src/app/shared/work-item.model';

@Component({
    selector: 'invoice-item',
    templateUrl: 'invoice-item.component.html',
    styleUrls: ['invoice-item.component.scss']
})
export class InvoiceItemComponent implements OnInit {

    @Input() item: WorkItemModel;

    ngOnInit(): void {
    }

}
