import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
import { WorkItemModel } from 'src/app/shared/work-item.model';

@Component({
  selector: 'app-work-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'work-item.component.html',
  styleUrls: ['work-item.component.scss'],
})
export class WorkItemComponent implements OnInit {
  @Input() item: WorkItemModel;

  ngOnInit(): void {}
}
