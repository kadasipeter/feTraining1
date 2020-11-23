import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { WorkItemModel } from 'src/app/shared/work-item.model';

@Component({
  selector: 'app-sidebar-items',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'sidebar-items.component.html',
  styleUrls: ['sidebar-items.component.scss'],
})
export class SidebarItemsComponent {
  @Input() items: WorkItemModel[];
}
