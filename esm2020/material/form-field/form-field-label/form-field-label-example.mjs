import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/material/radio";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/material/core";
import * as i7 from "@angular/material/icon";
import * as i8 from "@angular/material/input";
/** @title Form field with label */
export class FormFieldLabelExample {
    constructor(fb) {
        this.hideRequiredControl = new FormControl(false);
        this.floatLabelControl = new FormControl('auto');
        this.options = fb.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
    }
}
FormFieldLabelExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: FormFieldLabelExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
FormFieldLabelExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.5", type: FormFieldLabelExample, selector: "form-field-label-example", ngImport: i0, template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <mat-form-field appearance=\"fill\"\n        [hideRequiredMarker]=\"hideRequiredControl.value\"\n        [floatLabel]=\"floatLabelControl.value\">\n      <input matInput placeholder=\"Simple placeholder\" required>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\" [floatLabel]=\"floatLabelControl.value\">\n      <mat-label>Both a label and a placeholder</mat-label>\n      <input matInput placeholder=\"Simple placeholder\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\"\n        [hideRequiredMarker]=\"hideRequiredControl.value\"\n        [floatLabel]=\"floatLabelControl.value\">\n      <mat-select required>\n        <mat-option>-- None --</mat-option>\n        <mat-option value=\"option\">Option</mat-option>\n      </mat-select>\n      <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>\n    </mat-form-field>\n  </form>\n</div>\n", styles: [".example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container .mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n"], components: [{ type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i4.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i5.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i7.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i8.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i4.MatLabel, selector: "mat-label" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: FormFieldLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-label-example', template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <mat-form-field appearance=\"fill\"\n        [hideRequiredMarker]=\"hideRequiredControl.value\"\n        [floatLabel]=\"floatLabelControl.value\">\n      <input matInput placeholder=\"Simple placeholder\" required>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\" [floatLabel]=\"floatLabelControl.value\">\n      <mat-label>Both a label and a placeholder</mat-label>\n      <input matInput placeholder=\"Simple placeholder\">\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\"\n        [hideRequiredMarker]=\"hideRequiredControl.value\"\n        [floatLabel]=\"floatLabelControl.value\">\n      <mat-select required>\n        <mat-option>-- None --</mat-option>\n        <mat-option value=\"option\">Option</mat-option>\n      </mat-select>\n      <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>\n    </mat-form-field>\n  </form>\n</div>\n", styles: [".example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container .mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 5px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFZLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7QUFFbkUsbUNBQW1DO0FBTW5DLE1BQU0sT0FBTyxxQkFBcUI7SUFLaEMsWUFBWSxFQUFlO1FBSDNCLHdCQUFtQixHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLHNCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QixZQUFZLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUN0QyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUNuQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt5SEFWVSxxQkFBcUI7NkdBQXJCLHFCQUFxQixnRUNUbEMsNDBDQWlDQTtrR0R4QmEscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggbGFiZWwgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRMYWJlbEV4YW1wbGUge1xuICBvcHRpb25zOiBGb3JtR3JvdXA7XG4gIGhpZGVSZXF1aXJlZENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xuICBmbG9hdExhYmVsQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnYXV0bycpO1xuXG4gIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMub3B0aW9ucyA9IGZiLmdyb3VwKHtcbiAgICAgIGhpZGVSZXF1aXJlZDogdGhpcy5oaWRlUmVxdWlyZWRDb250cm9sLFxuICAgICAgZmxvYXRMYWJlbDogdGhpcy5mbG9hdExhYmVsQ29udHJvbCxcbiAgICB9KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwib3B0aW9uc1wiPlxuICAgIDxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sXT1cImhpZGVSZXF1aXJlZENvbnRyb2xcIj5IaWRlIHJlcXVpcmVkIG1hcmtlcjwvbWF0LWNoZWNrYm94PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+RmxvYXQgbGFiZWw6IDwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbF09XCJmbG9hdExhYmVsQ29udHJvbFwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImF1dG9cIj5BdXRvPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImFsd2F5c1wiPkFsd2F5czwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvZGl2PlxuXG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCJcbiAgICAgICAgW2hpZGVSZXF1aXJlZE1hcmtlcl09XCJoaWRlUmVxdWlyZWRDb250cm9sLnZhbHVlXCJcbiAgICAgICAgW2Zsb2F0TGFiZWxdPVwiZmxvYXRMYWJlbENvbnRyb2wudmFsdWVcIj5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNpbXBsZSBwbGFjZWhvbGRlclwiIHJlcXVpcmVkPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBbZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsQ29udHJvbC52YWx1ZVwiPlxuICAgICAgPG1hdC1sYWJlbD5Cb3RoIGEgbGFiZWwgYW5kIGEgcGxhY2Vob2xkZXI8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlNpbXBsZSBwbGFjZWhvbGRlclwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIlxuICAgICAgICBbaGlkZVJlcXVpcmVkTWFya2VyXT1cImhpZGVSZXF1aXJlZENvbnRyb2wudmFsdWVcIlxuICAgICAgICBbZmxvYXRMYWJlbF09XCJmbG9hdExhYmVsQ29udHJvbC52YWx1ZVwiPlxuICAgICAgPG1hdC1zZWxlY3QgcmVxdWlyZWQ+XG4gICAgICAgIDxtYXQtb3B0aW9uPi0tIE5vbmUgLS08L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uXCI+T3B0aW9uPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgICAgPG1hdC1sYWJlbD48bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPiA8Yj4gRmFuY3k8L2I+IDxpPiBsYWJlbDwvaT48L21hdC1sYWJlbD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2Zvcm0+XG48L2Rpdj5cbiJdfQ==