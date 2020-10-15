import { Validator, AbstractControl, ValidationErrors } from '@angular/forms';

export class InvoiceNumberValidator implements Validator {

    validate(control: AbstractControl): { [key: string]: any } {
        if (!control.value) { return null; }

        return this.isEmptyOrWhiteSpaces(control.value)
            ? { 'exception': true }
            : null;
    }

    private isEmptyOrWhiteSpaces(value: string): boolean {
        return value === null || value.match(/^ *$/) !== null;
    }
}

export function validateNumber(internalValidator: Validator) {
    return (control: AbstractControl): { [key: string]: any } => {
        return internalValidator.validate(control);
    };
}