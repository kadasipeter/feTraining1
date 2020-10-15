import { AbstractControl } from '@angular/forms';

export function RequiredIgnoreWhiteSpacesValidator(control: AbstractControl) {
    if ((control.value.replace(/\s/g, '')).length === 0) {
        return { 'required': true };
    }

    return null;
}
