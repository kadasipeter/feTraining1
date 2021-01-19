import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-work-items',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'work-items.component.html',
    styleUrls: ['work-items.component.scss']
})
export class WorkItemsComponent implements OnInit {

    ngOnInit(): void {
    }
}
