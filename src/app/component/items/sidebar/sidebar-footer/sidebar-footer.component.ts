import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { WorkItemSummary } from 'src/app/core/work-items-summary.model';

@Component({
  selector: 'app-sidebar-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'sidebar-footer.component.html',
  styleUrls: ['sidebar-footer.component.scss'],
})
export class SidebarFooterComponent implements OnInit {
  @Input() summaryItems: WorkItemSummary[];

  ngOnInit(): void {}
}
