import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarFilterComponent } from './sidebar-filter.component';
import { WorkItemComponent } from '../sidebar-items/work-item/work-item.component';

describe('SidebarFilterComponent', () => {
  let component: SidebarFilterComponent;
  let fixture: ComponentFixture<SidebarFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SidebarFilterComponent,
        WorkItemComponent
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit filter text after typing into filter input', fakeAsync(() => {
    component = fixture.componentInstance;
    const nativeElement: HTMLElement = fixture.nativeElement;
    const input = nativeElement.querySelector('input');

    spyOn(component.filterItems, 'emit');

    component.priorityFilter.setValue('x');
    expect(input.value).toBe('x');

    tick(301);
    fixture.detectChanges();

    expect(component.filterItems.emit).toHaveBeenCalled();
    expect(component.filterItems.emit).toHaveBeenCalledWith('x');
 }));
});
