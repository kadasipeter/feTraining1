import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-main',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'main.component.html',
    styleUrls: ['main.component.scss']
})
export class MainComponent implements OnInit {

    ngOnInit(): void {
    }
}
