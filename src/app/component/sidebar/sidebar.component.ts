
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

import { WorkItem } from 'src/app/core/work-item.model';
import { WorkItemService } from 'src/app/core/work-item.service';

@Component({
  selector: 'app-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: WorkItem[];

  private allItems: WorkItem[];
  private actualFilter = '';

  constructor(private workItemsService: WorkItemService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.workItemsService.items$.subscribe((_) => {
      this.allItems = _;
      this.onFilterItems(this.actualFilter);
      this.cdr.detectChanges();
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
