import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { WorkItemWithPriority } from 'src/app/shared/work-item-with-priority.model';

@Component({
    selector: 'sidebar-items',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'sidebar-items.component.html',
    styleUrls: ['sidebar-items.component.scss']
})
export class SidebarItemsComponent {
    @Input() filteredItems: WorkItemWithPriority[];
}
