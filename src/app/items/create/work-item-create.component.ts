import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { WorkItemService } from 'src/app/core/work-item.service';

@Component({
    selector: 'app-work-item-create',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'work-item-create.component.html',
    styleUrls: ['work-item-create.component.scss']
})

export class WorkItemCreateComponent implements OnInit {

  itemCreateForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private workItemsService: WorkItemService,
    ) { }

    ngOnInit(): void {

        this.itemCreateForm = this.formBuilder.group({
            inputInvoice: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('[a-zA-Z ]*')]],
            inputDate: ['', []]
        });

        this.inputDate.setValue(new Date().toISOString().split('T')[0]);
    }

    get inputInvoice(): AbstractControl {
        return this.itemCreateForm.controls.inputInvoice;
    }

    get inputDate(): AbstractControl {
        return this.itemCreateForm.controls.inputDate;
    }

    insertWorkItem(): void{
        this.workItemsService.createWorkItem(this.inputInvoice.value, this.inputDate.value);
        this.inputInvoice.setValue('');
    }
}

