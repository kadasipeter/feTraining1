import { Component, OnInit } from '@angular/core';
import { WorkItemModel } from './shared/work-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {

  }

  title = 'work-items-app';

}

