import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/input";
/** @title Form field appearance variants */
export class FormFieldAppearanceExample {
}
FormFieldAppearanceExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: FormFieldAppearanceExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
FormFieldAppearanceExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: FormFieldAppearanceExample, selector: "form-field-appearance-example", ngImport: i0, template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n", dependencies: [{ kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]" }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: FormFieldAppearanceExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-appearance-example', template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1hcHBlYXJhbmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtYXBwZWFyYW5jZS9mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1hcHBlYXJhbmNlL2Zvcm0tZmllbGQtYXBwZWFyYW5jZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEMsNENBQTRDO0FBSzVDLE1BQU0sT0FBTywwQkFBMEI7OzRIQUExQiwwQkFBMEI7Z0hBQTFCLDBCQUEwQixxRUNQdkMsNGdCQWdCQTtnR0RUYSwwQkFBMEI7a0JBSnRDLFNBQVM7K0JBQ0UsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgYXBwZWFyYW5jZSB2YXJpYW50cyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1hcHBlYXJhbmNlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtYXBwZWFyYW5jZS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRBcHBlYXJhbmNlRXhhbXBsZSB7fVxuIiwiPHA+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+RmlsbCBmb3JtIGZpZWxkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIj5cbiAgICA8bWF0LWljb24gbWF0U3VmZml4PnNlbnRpbWVudF92ZXJ5X3NhdGlzZmllZDwvbWF0LWljb24+XG4gICAgPG1hdC1oaW50PkhpbnQ8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuPHA+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgIDxtYXQtbGFiZWw+T3V0bGluZSBmb3JtIGZpZWxkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIj5cbiAgICA8bWF0LWljb24gbWF0U3VmZml4PnNlbnRpbWVudF92ZXJ5X3NhdGlzZmllZDwvbWF0LWljb24+XG4gICAgPG1hdC1oaW50PkhpbnQ8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuIl19