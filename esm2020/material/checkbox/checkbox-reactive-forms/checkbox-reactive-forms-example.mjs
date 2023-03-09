import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/common";
/** @title Checkboxes with reactive forms */
class CheckboxReactiveFormsExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.toppings = this._formBuilder.group({
            pepperoni: false,
            extracheese: false,
            mushroom: false,
        });
    }
}
CheckboxReactiveFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CheckboxReactiveFormsExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
CheckboxReactiveFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.2", type: CheckboxReactiveFormsExample, selector: "checkbox-reactive-forms-example", ngImport: i0, template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"], dependencies: [{ kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "pipe", type: i3.JsonPipe, name: "json" }] });
export { CheckboxReactiveFormsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CheckboxReactiveFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-reactive-forms-example', template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zL2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRTNDLDRDQUE0QztBQUM1QyxNQUthLDRCQUE0QjtJQU92QyxZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQU43QyxhQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDakMsU0FBUyxFQUFFLEtBQUs7WUFDaEIsV0FBVyxFQUFFLEtBQUs7WUFDbEIsUUFBUSxFQUFFLEtBQUs7U0FDaEIsQ0FBQyxDQUFDO0lBRTZDLENBQUM7O2dJQVB0Qyw0QkFBNEI7b0hBQTVCLDRCQUE0Qix1RUNUekMsOGRBV0E7U0RGYSw0QkFBNEI7a0dBQTVCLDRCQUE0QjtrQkFMeEMsU0FBUzsrQkFDRSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgQ2hlY2tib3hlcyB3aXRoIHJlYWN0aXZlIGZvcm1zICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hSZWFjdGl2ZUZvcm1zRXhhbXBsZSB7XG4gIHRvcHBpbmdzID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIHBlcHBlcm9uaTogZmFsc2UsXG4gICAgZXh0cmFjaGVlc2U6IGZhbHNlLFxuICAgIG11c2hyb29tOiBmYWxzZSxcbiAgfSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIiBbZm9ybUdyb3VwXT1cInRvcHBpbmdzXCI+XG4gIDxoND5TZWxlY3QgeW91ciB0b3BwaW5nczo8L2g0PlxuICA8cD48bWF0LWNoZWNrYm94IGZvcm1Db250cm9sTmFtZT1cInBlcHBlcm9uaVwiPlBlcHBlcm9uaTwvbWF0LWNoZWNrYm94PjwvcD5cbiAgPHA+PG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJleHRyYWNoZWVzZVwiPkV4dHJhIENoZWVzZTwvbWF0LWNoZWNrYm94PjwvcD5cbiAgPHA+PG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJtdXNocm9vbVwiPk11c2hyb29tPC9tYXQtY2hlY2tib3g+PC9wPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiIFtmb3JtR3JvdXBdPVwidG9wcGluZ3NcIj5cbiAgPGg0PllvdSBjaG9zZTo8L2g0PlxuICB7e3RvcHBpbmdzLnZhbHVlIHwganNvbn19XG48L3NlY3Rpb24+XG4iXX0=