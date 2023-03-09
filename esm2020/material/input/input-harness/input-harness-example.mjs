import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/input";
import * as i2 from "@angular/material/form-field";
/**
 * @title Testing with MatInputHarness
 */
class InputHarnessExample {
    constructor() {
        this.inputType = 'number';
        this.disabled = false;
    }
}
InputHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: InputHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.2", type: InputHarnessExample, selector: "input-harness-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <input matInput value=\"Sushi\" name=\"favorite-food\">\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [type]=\"inputType\"\n         [disabled]=\"disabled\">\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Leave a comment</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n", dependencies: [{ kind: "directive", type: i1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }] });
export { InputHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: InputHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-harness-example', template: "<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <input matInput value=\"Sushi\" name=\"favorite-food\">\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [type]=\"inputType\"\n         [disabled]=\"disabled\">\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Leave a comment</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtaGFybmVzcy9pbnB1dC1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1oYXJuZXNzL2lucHV0LWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFDSCxNQUlhLG1CQUFtQjtJQUpoQztRQUtFLGNBQVMsR0FBRyxRQUFRLENBQUM7UUFDckIsYUFBUSxHQUFHLEtBQUssQ0FBQztLQUNsQjs7dUhBSFksbUJBQW1COzJHQUFuQixtQkFBbUIsNkRDVGhDLCtXQWNBO1NETGEsbUJBQW1CO2tHQUFuQixtQkFBbUI7a0JBSi9CLFNBQVM7K0JBQ0UsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0SW5wdXRIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEhhcm5lc3NFeGFtcGxlIHtcbiAgaW5wdXRUeXBlID0gJ251bWJlcic7XG4gIGRpc2FibGVkID0gZmFsc2U7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgZm9vZDwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgdmFsdWU9XCJTdXNoaVwiIG5hbWU9XCJmYXZvcml0ZS1mb29kXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJpbnB1dFR5cGVcIlxuICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+TGVhdmUgYSBjb21tZW50PC9tYXQtbGFiZWw+XG4gIDx0ZXh0YXJlYSBtYXRJbnB1dD48L3RleHRhcmVhPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==