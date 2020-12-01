import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-work-item-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'work-item-dashboard.component.html',
    styleUrls: ['work-item-dashboard.component.scss']
})
export class WorkItemDashboardComponent implements OnInit {

    id = new FormControl();

    constructor(private route: Router) { }

    ngOnInit(): void {
    }

    goToCreate(): void {
        this.route.navigateByUrl('items/create');
    }

    goToDetail(): void {
        const idValue: number = this.id.value !== null ? this.id.value : 1;
        this.route.navigateByUrl('items/detail/' + idValue.toString());
    }
}
