import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { WorkItemService } from 'src/app/shared/work-item.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})

export class HomeComponent implements OnInit {

    @Output() refresh: EventEmitter<void> = new EventEmitter();

    homeForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private workItemsService: WorkItemService,
    ) { }

    ngOnInit() {

        this.homeForm = this.formBuilder.group({
            inputInvoice: ['', []],
            inputDate: ['', []]
        });

        this.inputDate.setValue(new Date().toISOString().split('T')[0]);
    }

    get inputInvoice(): AbstractControl {
        return this.homeForm.controls['inputInvoice'];
    }

    get inputDate(): AbstractControl {
        return this.homeForm.controls['inputDate'];
    }

    insertWorkItem() {
        this.workItemsService.createWorkItem(this.inputInvoice.value, this.inputDate.value);
        this.inputInvoice.setValue("");
        this.refresh.emit();
    }
};

