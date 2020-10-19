import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { WorkItemModel } from 'src/app/shared/work-item.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WorkItemService } from 'src/app/shared/work-item.service';
import { WorkItemSummary } from 'src/app/shared/work-items-summary.model';
import { WorkItemWithPriority } from 'src/app/shared/work-item-with-priority.model';

@Component({
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    @Input() items: WorkItemModel[];
    @ViewChild('itemsDiv') itemsDiv: ElementRef<HTMLElement>;

    filterForm: FormGroup;
    filteredItems: WorkItemModel[] = [];
    actualFilter: string = "";

    constructor(private formBuilder: FormBuilder, private workItemsService: WorkItemService) {
    }


    ngOnInit(): void {
        this.filteredItems = this.items;

        this.filterForm = this.formBuilder.group({
            priorityFilter: ["", []]
        });
    }

    get priorityFilter() { return this.filterForm.controls['priorityFilter']; }

    getSummaryItems(): WorkItemSummary[] {
        this.filterItems();
        return this.workItemsService.getItemsSummary(this.filteredItems);
    }

    filterItems() {
        if (this.priorityFilter.value !== this.actualFilter) {
            this.actualFilter = this.priorityFilter.value;
            this.filteredItems = this.workItemsService.filterItems(this.items, this.actualFilter);
        }
    }

    getItemWithPriority(item: WorkItemModel): WorkItemWithPriority {
        let ret = new WorkItemWithPriority();
        ret.Description = item.Description;
        ret.Id = item.Id;
        ret.Value = item.Value;
        ret.Priority = this.workItemsService.calculatePriority(item.Value);
        return ret;
    }


    scrollToBottom(): void {
        try {
            this.itemsDiv.nativeElement.scrollTop = this.itemsDiv.nativeElement.scrollHeight;
        } catch (err) { }
    }
}
