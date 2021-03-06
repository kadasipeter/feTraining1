import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

import { WorkItemService } from 'src/app/shared/work-item.service';

@Component({
    selector: 'app-work-item-create',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'work-item-create.component.html',
    styleUrls: ['work-item-create.component.scss']
})

export class WorkItemCreateComponent implements OnInit {

    homeForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private workItemsService: WorkItemService,
    ) { }

    ngOnInit(): void {

        this.homeForm = this.formBuilder.group({
            inputInvoice: ['', []],
            inputDate: ['', []]
        });

        this.inputDate.setValue(new Date().toISOString().split('T')[0]);
    }

    get inputInvoice(): AbstractControl {
        return this.homeForm.controls.inputInvoice;
    }

    get inputDate(): AbstractControl {
        return this.homeForm.controls.inputDate;
    }

    insertWorkItem(): void{
        this.workItemsService.createWorkItem(this.inputInvoice.value, this.inputDate.value);
        this.inputInvoice.setValue('');
    }
}

