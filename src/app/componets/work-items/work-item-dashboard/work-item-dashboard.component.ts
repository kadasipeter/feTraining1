import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'work-item-dashboard',
    templateUrl: 'work-item-dashboard.component.html',
    styleUrls: ['work-item-dashboard.component.scss']
})
export class WorkItemDashboardComponent implements OnInit {

    id = new FormControl();

    constructor(private route: Router) { }

    ngOnInit(): void {
    }

    goToCreate() {
        this.route.navigateByUrl('items/create');
    }

    goToDetail() {
        let idValue: number = this.id.value !== null ? this.id.value : 1;
        this.route.navigateByUrl('items/detail/' + idValue.toString());
    }
}
