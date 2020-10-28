import { Component, Input } from '@angular/core';
import { WorkItemSummary } from 'src/app/shared/work-items-summary.model';

@Component({
    selector: 'sidebar-footer',
    templateUrl: 'sidebar-footer.component.html',
    styleUrls: ['sidebar-footer.component.scss']
})
export class SidebarFooterComponent {
    @Input() summaryItems: WorkItemSummary[];
}
