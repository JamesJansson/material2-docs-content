import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
/** @title Select with 2-way value binding */
class SelectValueBindingExample {
    constructor() {
        this.selected = 'option2';
    }
}
SelectValueBindingExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: SelectValueBindingExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectValueBindingExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.2", type: SelectValueBindingExample, selector: "select-value-binding-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Select an option</mat-label>\n  <mat-select [(value)]=\"selected\">\n    <mat-option>None</mat-option>\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\">Option 2</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<p>You selected: {{selected}}</p>\n", dependencies: [{ kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }] });
export { SelectValueBindingExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: SelectValueBindingExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-value-binding-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Select an option</mat-label>\n  <mat-select [(value)]=\"selected\">\n    <mat-option>None</mat-option>\n    <mat-option value=\"option1\">Option 1</mat-option>\n    <mat-option value=\"option2\">Option 2</mat-option>\n    <mat-option value=\"option3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<p>You selected: {{selected}}</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtdmFsdWUtYmluZGluZy9zZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC12YWx1ZS1iaW5kaW5nL3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qyw2Q0FBNkM7QUFDN0MsTUFJYSx5QkFBeUI7SUFKdEM7UUFLRSxhQUFRLEdBQUcsU0FBUyxDQUFDO0tBQ3RCOzs2SEFGWSx5QkFBeUI7aUhBQXpCLHlCQUF5QixvRUNQdEMsaVpBV0E7U0RKYSx5QkFBeUI7a0dBQXpCLHlCQUF5QjtrQkFKckMsU0FBUzsrQkFDRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggMi13YXkgdmFsdWUgYmluZGluZyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0VmFsdWVCaW5kaW5nRXhhbXBsZSB7XG4gIHNlbGVjdGVkID0gJ29wdGlvbjInO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+U2VsZWN0IGFuIG9wdGlvbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbKHZhbHVlKV09XCJzZWxlY3RlZFwiPlxuICAgIDxtYXQtb3B0aW9uPk5vbmU8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24xXCI+T3B0aW9uIDE8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24yXCI+T3B0aW9uIDI8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb24zXCI+T3B0aW9uIDM8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxwPllvdSBzZWxlY3RlZDoge3tzZWxlY3RlZH19PC9wPlxuIl19