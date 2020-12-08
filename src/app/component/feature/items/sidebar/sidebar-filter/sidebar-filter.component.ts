import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-sidebar-filter',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'sidebar-filter.component.html',
    styleUrls: ['sidebar-filter.component.scss']
})
export class SidebarFilterComponent implements OnInit {

    @Output() filterItems: EventEmitter<string> = new EventEmitter();

    priorityFilter = new FormControl();

    constructor() {
    }

    ngOnInit(): void {
        this.priorityFilter.valueChanges
            .pipe(
                debounceTime(300),
                distinctUntilChanged()
            )
            .subscribe(value => {
                this.filterItems.emit(value);
            });
    }
}
