import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkItemService } from 'src/app/shared/work-item.service';
import { WorkItemModel } from 'src/app/shared/work-item.model';

@Component({
    selector: 'work-item-detail',
    templateUrl: 'work-item-detail.component.html',
    styleUrls: ['work-item-detail.component.scss']
})
export class WorkItemDetailComponent implements OnInit {

    @Input() item: WorkItemModel;

    constructor(private route: ActivatedRoute, private itemService: WorkItemService) {
        this.route.paramMap.subscribe(params => {
            this.ngOnInit();
        });
    }

    ngOnInit(): void {
        let id: number = parseInt(this.route.snapshot.paramMap.get("id"));
        this.item = this.itemService.getWorkItem(id);
    }

}
