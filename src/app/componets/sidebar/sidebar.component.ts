import {
  Component,
  OnInit
} from '@angular/core';
import { WorkItemService } from 'src/app/shared/work-item.service';
import { WorkItemModel } from 'src/app/shared/work-item.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: WorkItemModel[];

  private allItems: WorkItemModel[];
  private actualFilter = '';

  constructor(private workItemsService: WorkItemService) {}

  ngOnInit(): void {
    this.workItemsService.items$.subscribe((_) => {
      this.allItems = _;
      this.onFilterItems(this.actualFilter);
    });
  }

  onFilterItems(value: string): void {
    this.actualFilter = value;

    if (value === '') {
      this.items = this.allItems;
    } else {
      this.items = this.allItems.filter((_) => _.description.includes(value));
    }
  }
}
