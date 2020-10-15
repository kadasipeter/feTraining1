import { Component, OnInit, Input } from '@angular/core';
import { WorkItemModel } from 'src/app/shared/work-item.model';
import { WorkItemsSummary } from 'src/app/shared/work-items-summary.model';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    @Input() items: WorkItemModel[];
    @Input() summaryItems: WorkItemsSummary[];

    filterForm: FormGroup;
    filteredItems: WorkItemModel[] = [];
    filteredSummaryItems: WorkItemsSummary[];


    constructor(private formBuilder: FormBuilder) {
    }


    ngOnInit(): void {
        this.filteredItems = this.items;
        this.filteredSummaryItems = this.summaryItems;
        this.filterForm = this.formBuilder.group({
            priorityFilter: ["", []]
        });
    }

    get priorityFilter() { return this.filterForm.controls['priorityFilter']; }

    filter() {
        if (this.priorityFilter.value === "") {
            this.filteredItems = this.items;
            this.summaryItems = this.summaryItems;
        }
        else {

            let filter = Array.from(this.priorityFilter.value);
            this.filteredItems = this.items.filter(x => filter.indexOf(x.Priority.toString()) !== -1);
            this.filteredSummaryItems = this.summaryItems.filter(x => filter.indexOf(x.Id.toString()) !== -1);
        }
    }

}
