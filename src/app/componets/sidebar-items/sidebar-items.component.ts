import { Component, Input } from '@angular/core';
import { WorkItemModel } from 'src/app/shared/work-item.model';
import { WorkItemWithPriority } from 'src/app/shared/work-item-with-priority.model';

@Component({
    selector: 'sidebar-items',
    templateUrl: 'sidebar-items.component.html',
    styleUrls: ['sidebar-items.component.scss']
})
export class SidebarItemsComponent {
    @Input() filteredItems: WorkItemWithPriority[];
}
