import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/forms";
/** @title Date range picker forms integration */
class DateRangePickerFormsExample {
    constructor() {
        this.range = new FormGroup({
            start: new FormControl(null),
            end: new FormControl(null),
        });
    }
}
DateRangePickerFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: DateRangePickerFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateRangePickerFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.2", type: DateRangePickerFormsExample, selector: "date-range-picker-forms-example", ngImport: i0, template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n  <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i4.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "pipe", type: i1.JsonPipe, name: "json" }] });
export { DateRangePickerFormsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: DateRangePickerFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-forms-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  <mat-error *ngIf=\"range.controls.start.hasError('matStartDateInvalid')\">Invalid start date</mat-error>\n  <mat-error *ngIf=\"range.controls.end.hasError('matEndDateInvalid')\">Invalid end date</mat-error>\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBRXRELGlEQUFpRDtBQUNqRCxNQUlhLDJCQUEyQjtJQUp4QztRQUtFLFVBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQWMsSUFBSSxDQUFDO1lBQ3pDLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBYyxJQUFJLENBQUM7U0FDeEMsQ0FBQyxDQUFDO0tBQ0o7OytIQUxZLDJCQUEyQjttSEFBM0IsMkJBQTJCLHVFQ1J4QywyeUJBZUE7U0RQYSwyQkFBMkI7a0dBQTNCLDJCQUEyQjtrQkFKdkMsU0FBUzsrQkFDRSxpQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Hcm91cCwgRm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBEYXRlIHJhbmdlIHBpY2tlciBmb3JtcyBpbnRlZ3JhdGlvbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyRm9ybXNFeGFtcGxlIHtcbiAgcmFuZ2UgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBzdGFydDogbmV3IEZvcm1Db250cm9sPERhdGUgfCBudWxsPihudWxsKSxcbiAgICBlbmQ6IG5ldyBGb3JtQ29udHJvbDxEYXRlIHwgbnVsbD4obnVsbCksXG4gIH0pO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+RW50ZXIgYSBkYXRlIHJhbmdlPC9tYXQtbGFiZWw+XG4gIDxtYXQtZGF0ZS1yYW5nZS1pbnB1dCBbZm9ybUdyb3VwXT1cInJhbmdlXCIgW3JhbmdlUGlja2VyXT1cInBpY2tlclwiPlxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgZm9ybUNvbnRyb2xOYW1lPVwic3RhcnRcIiBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBmb3JtQ29udHJvbE5hbWU9XCJlbmRcIiBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtaGludD5NTS9ERC9ZWVlZIOKAkyBNTS9ERC9ZWVlZPC9tYXQtaGludD5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRJY29uU3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI3BpY2tlcj48L21hdC1kYXRlLXJhbmdlLXBpY2tlcj5cblxuICA8bWF0LWVycm9yICpuZ0lmPVwicmFuZ2UuY29udHJvbHMuc3RhcnQuaGFzRXJyb3IoJ21hdFN0YXJ0RGF0ZUludmFsaWQnKVwiPkludmFsaWQgc3RhcnQgZGF0ZTwvbWF0LWVycm9yPlxuICA8bWF0LWVycm9yICpuZ0lmPVwicmFuZ2UuY29udHJvbHMuZW5kLmhhc0Vycm9yKCdtYXRFbmREYXRlSW52YWxpZCcpXCI+SW52YWxpZCBlbmQgZGF0ZTwvbWF0LWVycm9yPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPHA+U2VsZWN0ZWQgcmFuZ2U6IHt7cmFuZ2UudmFsdWUgfCBqc29ufX08L3A+XG4iXX0=