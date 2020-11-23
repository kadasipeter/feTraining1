import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-sidebar-filter',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'sidebar-filter.component.html',
    styleUrls: ['sidebar-filter.component.scss']
})
export class SidebarFilterComponent implements OnInit {

    @Output() filterItems: EventEmitter<string> = new EventEmitter();

    actualFilter = '';
    priorityFilter = new FormControl();

    constructor() {
    }

    ngOnInit(): void {
        this.priorityFilter.valueChanges
            .pipe(
                filter(p => this.actualFilter !== p)
            )
            .subscribe(value => {
                this.actualFilter = value;
                this.filterItems.emit(value);
            });
    }
}
