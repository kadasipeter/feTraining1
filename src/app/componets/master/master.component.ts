import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home/home.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector: 'master',
    templateUrl: 'master.component.html',
    styleUrls: ['master.component.scss']
})
export class MasterComponent implements OnInit {

    @ViewChild(SidebarComponent)
    private sidebar: SidebarComponent;

    ngOnInit(): void {

    }

    onActivate(componentRef) {
        if (componentRef instanceof HomeComponent) {
            componentRef.refresh.subscribe(() => this.refreshSidebar());
        }
    }

    private refreshSidebar() {
        this.sidebar.refreshData();
    }

}
