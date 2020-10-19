import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InvoiceNumberValidator } from 'src/app/validators/invoice-number-validator';
import { FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { WorkItemModel } from 'src/app/shared/work-item.model';
import { WorkItemService } from 'src/app/shared/work-item.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
    homeForm: FormGroup;
    inputInvoiceValue: string;
    items: WorkItemModel[] = [];

    private validator = new InvoiceNumberValidator();

    @Output() workItemsCreated: EventEmitter<WorkItemModel[]> = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        private workItemsService: WorkItemService
    ) {

    }

    ngOnInit() {
        this.workItemsService.create500WorkItems().forEach(element => {
            this.items.push(element);
        });

        this.homeForm = this.formBuilder.group({
            inputInvoice: ['', []]
        });
    }

    get inputInvoice(): AbstractControl {
        return this.homeForm.controls['inputInvoice'];
    }

    insertInvoice() {
        var newItem = this.workItemsService.createWorkItem(this.homeForm.controls['inputInvoice'].value);
        this.inputInvoiceValue = "";
        this.items.push(newItem);
    }
};

