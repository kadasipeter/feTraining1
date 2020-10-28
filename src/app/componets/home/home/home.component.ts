import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { InvoiceNumberValidator } from 'src/app/validators/invoice-number-validator';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { WorkItemModel } from 'src/app/shared/work-item.model';
import { WorkItemService } from 'src/app/shared/work-item.service';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { WorkItemWithPriority } from 'src/app/shared/work-item-with-priority.model';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
    @ViewChild('mySidebar') mySidebar: SidebarComponent;

    homeForm: FormGroup;
    inputInvoiceValue: string;
    items: WorkItemWithPriority[] = [];


    constructor(
        private formBuilder: FormBuilder,
        private workItemsService: WorkItemService
    ) {

    }

    ngOnInit() {
        this.workItemsService.create500WorkItems().forEach(element => {
            this.items.push(this.workItemsService.getItemWithPriority(element));
        });

        this.homeForm = this.formBuilder.group({
            inputInvoice: ['', []]
        });
    }

    get inputInvoice(): AbstractControl {
        return this.homeForm.controls['inputInvoice'];
    }

    insertWorkItem() {
        let newItem: WorkItemWithPriority = this.workItemsService.getItemWithPriority(
            this.workItemsService.createWorkItem(this.inputInvoice.value));
        this.inputInvoiceValue = "";
        this.items = [newItem, ...this.items];
        //  this.items.push(newItem);
    }
};

