import { Pipe, PipeTransform } from '@angular/core';
import { PriorityType } from '../core/priority-type.enum';

@Pipe({ name: 'getPriority' })
export class GetPriorityPipe implements PipeTransform {
    transform(value: number): string {
        return value + ': ' + PriorityType[value < 5 ? 1 : 2];
    }
}
