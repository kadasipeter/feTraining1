import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { WorkItem } from 'src/app/core/work-item.model';

@Component({
  selector: 'app-work-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'work-item.component.html',
  styleUrls: ['work-item.component.scss'],
})
export class WorkItemComponent implements OnInit {
  @Input() item: WorkItem;

  ngOnInit(): void {}
}
