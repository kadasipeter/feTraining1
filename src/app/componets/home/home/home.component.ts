import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { InvoiceNumberValidator } from 'src/app/validators/invoice-number-validator';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RequiredIgnoreWhiteSpacesValidator } from 'src/app/validators/required-ignore-white-spaces-validator';
import { CommonModule } from '@angular/common';
import { WorkItemModel } from 'src/app/shared/work-item.model';
import { WorkItemService } from 'src/app/shared/work-item.service';
import { WorkItemsSummary } from 'src/app/shared/work-items-summary.model';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {
    homeForm: FormGroup;
    inputInvoiceValue: string;
    items: WorkItemModel[] = [];
    summaryItems: WorkItemsSummary[] = [];

    private validator = new InvoiceNumberValidator();

    @Output() workItemsCreated: EventEmitter<WorkItemModel[]> = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder,
        private workItemsService: WorkItemService
    ) {

    }

    ngOnInit() {
        this.homeForm = this.formBuilder.group({
            inputInvoice: ['', [RequiredIgnoreWhiteSpacesValidator, Validators.maxLength(15)]]

        });

        this.workItemsService.Create500WorkItems().forEach(element => {
            this.items.push(element);
        });

        this.summaryItems = this.workItemsService.GetItemsSummary(this.items);


    }

    get inputInvoice(): AbstractControl {
        return this.homeForm.controls['inputInvoice'];
    }

    insertInvoice() {

        var newItem = this.workItemsService.CreateWorkItem();

        if (this.homeForm.controls['inputInvoice'].value !== "") {
            newItem.Description = this.homeForm.controls['inputInvoice'].value;
            this.inputInvoiceValue = "";
        }

        this.items.push(newItem);
        this.summaryItems = this.workItemsService.GetItemsSummary(this.items);

        // if (this.homeForm.valid) {

        // }
    }
};

