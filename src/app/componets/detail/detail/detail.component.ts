import { Component, OnInit, Input } from '@angular/core';
import { WorkItemWithPriority } from 'src/app/shared/work-item-with-priority.model';
import { ActivatedRoute } from '@angular/router';
import { WorkItemService } from 'src/app/shared/work-item.service';

@Component({
    selector: 'detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.scss']
})
export class DetailComponent implements OnInit {

    @Input() item: WorkItemWithPriority;

    constructor(private route: ActivatedRoute, private itemService: WorkItemService) {
        this.route.paramMap.subscribe(params => {
            this.ngOnInit();
        });
    }

    ngOnInit(): void {
        let id: number = parseInt(this.route.snapshot.paramMap.get("id"));
        this.itemService.getWorkItem(id).subscribe(item => this.item = item);
    }

}
