import { Component, OnInit } from '@angular/core';
import { WorkItemModel } from './shared/work-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  items: WorkItemModel[] = [];
  index

  ngOnInit() {
    this.items.push(this.CreateWorkItem());
    this.items.push(this.CreateWorkItem());
    this.items.push(this.CreateWorkItem());
    this.items.push(this.CreateWorkItem());
    this.items.push(this.CreateWorkItem());
    this.items.push(this.CreateWorkItem());
    this.items.push(this.CreateWorkItem());
  }

  private CreateWorkItem(): WorkItemModel {
    var ret = new WorkItemModel;
    ret.Id = 1;
    ret.Description = this.randomString(40, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
    ret.Value = this.randomPriority();
    return ret;
  }

  private randomString(length: number, chars: string): string {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  private randomPriority(): number {
    return Math.floor(Math.random() * 10);
  }
}
