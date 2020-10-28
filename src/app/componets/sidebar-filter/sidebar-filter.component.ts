import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'sidebar-filter',
    templateUrl: 'sidebar-filter.component.html',
    styleUrls: ['sidebar-filter.component.scss']
})
export class SidebarFilterComponent implements OnInit {

    @Output() filterItems: EventEmitter<string> = new EventEmitter();

    filterForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.filterForm = this.formBuilder.group({
            priorityFilter: ["", []]
        });
    }

    onKeyUp() {
        this.filterItems.emit(this.priorityFilter.value)
    };

    get priorityFilter() { return this.filterForm.controls['priorityFilter']; }
}
