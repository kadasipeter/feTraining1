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
    actualFilter: string = "";

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.filterForm = this.formBuilder.group({
            priorityFilter: ["", []]
        });
    }

    onKeyUp() {
        if (this.actualFilter !== this.priorityFilter.value) {
            this.actualFilter = this.priorityFilter.value;
            this.filterItems.emit(this.actualFilter)
        }
    };

    get priorityFilter() { return this.filterForm.controls['priorityFilter']; }
}
