import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { WorkItemService } from 'src/app/shared/work-item.service';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { WorkItemWithPriority } from 'src/app/shared/work-item-with-priority.model';
import { WorkItemSummary } from 'src/app/shared/work-items-summary.model';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
    @ViewChild('mySidebar') mySidebar: SidebarComponent;

    homeForm: FormGroup;
    actualFilter: string = '';
    filteredItems: WorkItemWithPriority[] = [];
    summaryItems: WorkItemSummary[] = [];

    private items: WorkItemWithPriority[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private workItemsService: WorkItemService,
    ) {

    }

    ngOnInit() {
        this.workItemsService.create500WorkItems().forEach(element => {
            this.items.push(this.workItemsService.getItemWithPriority(element));
        });

        this.homeForm = this.formBuilder.group({
            inputInvoice: ['', []],
            inputDate: ['', []]
        });

        this.filteredItems = this.items;
        this.loadSummaryItems();

        this.inputDate.setValue(new Date().toISOString().split('T')[0]);
    }

    get inputInvoice(): AbstractControl {
        return this.homeForm.controls['inputInvoice'];
    }

    get inputDate(): AbstractControl {
        return this.homeForm.controls['inputDate'];
    }

    insertWorkItem() {
        let newItem: WorkItemWithPriority = this.workItemsService.getItemWithPriority(
            this.workItemsService.createWorkItem(this.inputInvoice.value, this.inputDate.value));
        this.inputInvoice.setValue("");
        this.items = [newItem, ...this.items];
        this.onFilterItems(this.actualFilter);
    }

    onFilterItems(value: string) {
        this.filteredItems = this.workItemsService.filterItems(this.items, value);
        this.loadSummaryItems();
        this.actualFilter = value;
    }

    private loadSummaryItems() {
        this.summaryItems = this.workItemsService.getItemsSummary(this.filteredItems);
    }
};

