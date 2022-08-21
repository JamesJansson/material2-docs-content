import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
/**
 * @title Testing with MatFormFieldHarness
 */
export class FormFieldHarnessExample {
    constructor() {
        this.requiredControl = new FormControl('Initial value', [Validators.required]);
    }
}
FormFieldHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: FormFieldHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormFieldHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: FormFieldHarnessExample, selector: "form-field-harness-example", ngImport: i0, template: "<mat-form-field id=\"with-errors\" appearance=\"fill\">\n  <span class=\"custom-control\">Custom control harness</span>\n  <input matInput [formControl]=\"requiredControl\">\n\n  <mat-error>Error</mat-error>\n  <mat-hint align=\"start\">Hint</mat-hint>\n</mat-form-field>\n", dependencies: [{ kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: FormFieldHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-harness-example', template: "<mat-form-field id=\"with-errors\" appearance=\"fill\">\n  <span class=\"custom-control\">Custom control harness</span>\n  <input matInput [formControl]=\"requiredControl\">\n\n  <mat-error>Error</mat-error>\n  <mat-hint align=\"start\">Hint</mat-hint>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtaGFybmVzcy9mb3JtLWZpZWxkLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1oYXJuZXNzL2Zvcm0tZmllbGQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7OztBQUV2RDs7R0FFRztBQUtILE1BQU0sT0FBTyx1QkFBdUI7SUFKcEM7UUFLRSxvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0tBQzNFOzt5SEFGWSx1QkFBdUI7NkdBQXZCLHVCQUF1QixrRUNWcEMsbVJBT0E7Z0dER2EsdUJBQXVCO2tCQUpuQyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEZvcm1GaWVsZEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRIYXJuZXNzRXhhbXBsZSB7XG4gIHJlcXVpcmVkQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnSW5pdGlhbCB2YWx1ZScsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgaWQ9XCJ3aXRoLWVycm9yc1wiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxzcGFuIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2xcIj5DdXN0b20gY29udHJvbCBoYXJuZXNzPC9zcGFuPlxuICA8aW5wdXQgbWF0SW5wdXQgW2Zvcm1Db250cm9sXT1cInJlcXVpcmVkQ29udHJvbFwiPlxuXG4gIDxtYXQtZXJyb3I+RXJyb3I8L21hdC1lcnJvcj5cbiAgPG1hdC1oaW50IGFsaWduPVwic3RhcnRcIj5IaW50PC9tYXQtaGludD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=