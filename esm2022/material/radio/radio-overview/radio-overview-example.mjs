import { Component } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/radio";
/**
 * @title Basic radios
 */
export class RadioOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: RadioOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: RadioOverviewExample, isStandalone: true, selector: "radio-overview-example", ngImport: i0, template: "<mat-radio-group aria-label=\"Select an option\">\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n", styles: [".mat-mdc-radio-button ~ .mat-mdc-radio-button {\n  margin-left: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i1.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: RadioOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'radio-overview-example', standalone: true, imports: [MatRadioModule], template: "<mat-radio-group aria-label=\"Select an option\">\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n", styles: [".mat-mdc-radio-button ~ .mat-mdc-radio-button {\n  margin-left: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8tb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3JhZGlvL3JhZGlvLW92ZXJ2aWV3L3JhZGlvLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9yYWRpby1vdmVydmlldy9yYWRpby1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7OztBQUV2RDs7R0FFRztBQVFILE1BQU0sT0FBTyxvQkFBb0I7bUhBQXBCLG9CQUFvQjt1R0FBcEIsb0JBQW9CLGtGQ2JqQyxtTUFJQSxtSURPWSxjQUFjOztnR0FFYixvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0Usd0JBQXdCLGNBR3RCLElBQUksV0FDUCxDQUFDLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgcmFkaW9zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JhZGlvLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3JhZGlvLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydyYWRpby1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0UmFkaW9Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb092ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPG1hdC1yYWRpby1ncm91cCBhcmlhLWxhYmVsPVwiU2VsZWN0IGFuIG9wdGlvblwiPlxuICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIjFcIj5PcHRpb24gMTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L21hdC1yYWRpby1idXR0b24+XG48L21hdC1yYWRpby1ncm91cD5cbiJdfQ==