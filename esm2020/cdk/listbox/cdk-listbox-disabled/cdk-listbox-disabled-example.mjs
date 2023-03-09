import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/listbox";
/** @title Listbox with disabled options. */
class CdkListboxDisabledExample {
    constructor() {
        this.canDrinkCtrl = new FormControl(false);
    }
}
CdkListboxDisabledExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CdkListboxDisabledExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkListboxDisabledExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.2", type: CdkListboxDisabledExample, selector: "cdk-listbox-disabled-example", exportAs: ["cdkListboxDisabledExample"], ngImport: i0, template: "<form>\n  <p>\n    <input type=\"checkbox\" id=\"can-drink\" [formControl]=\"canDrinkCtrl\">&nbsp;\n    <label for=\"can-drink\">I am 21 or older</label>\n  </p>\n  <section>\n    <div class=\"example-listbox-container\" [class.example-disabled]=\"!canDrinkCtrl.value\">\n      <!-- #docregion listbox -->\n      <label class=\"example-listbox-label\" id=\"example-wine-type-label\">\n        Wine Selection\n      </label>\n      <ul cdkListbox\n          [cdkListboxDisabled]=\"!canDrinkCtrl.value\"\n          aria-labelledby=\"example-wine-type-label\"\n          class=\"example-listbox\">\n        <li cdkOption=\"cabernet\"\n            class=\"example-option\">\n          Cabernet Sauvignon\n        </li>\n        <li cdkOption=\"syrah\"\n            class=\"example-option\">\n          Syrah\n        </li>\n        <li cdkOption=\"zinfandel\"\n            cdkOptionDisabled\n            class=\"example-option\">\n          Zinfandel <span class=\"example-sold-out\">(sold out)</span>\n        </li>\n        <li cdkOption=\"riesling\"\n            class=\"example-option\">\n          Riesling\n        </li>\n      </ul>\n      <!-- #enddocregion listbox -->\n    </div>\n  </section>\n</form>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-disabled {\n  border-color: rgba(0, 0, 0, 0.5);\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-disabled .example-listbox-label {\n  opacity: 0.5;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option[aria-disabled='true'] {\n  opacity: 0.5;\n}\n\n.example-option[aria-disabled='false']:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.example-sold-out {\n  color: red;\n  font-size: 0.75em;\n  vertical-align: super;\n}\n"], dependencies: [{ kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: i2.CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] });
export { CdkListboxDisabledExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CdkListboxDisabledExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-disabled-example', exportAs: 'cdkListboxDisabledExample', template: "<form>\n  <p>\n    <input type=\"checkbox\" id=\"can-drink\" [formControl]=\"canDrinkCtrl\">&nbsp;\n    <label for=\"can-drink\">I am 21 or older</label>\n  </p>\n  <section>\n    <div class=\"example-listbox-container\" [class.example-disabled]=\"!canDrinkCtrl.value\">\n      <!-- #docregion listbox -->\n      <label class=\"example-listbox-label\" id=\"example-wine-type-label\">\n        Wine Selection\n      </label>\n      <ul cdkListbox\n          [cdkListboxDisabled]=\"!canDrinkCtrl.value\"\n          aria-labelledby=\"example-wine-type-label\"\n          class=\"example-listbox\">\n        <li cdkOption=\"cabernet\"\n            class=\"example-option\">\n          Cabernet Sauvignon\n        </li>\n        <li cdkOption=\"syrah\"\n            class=\"example-option\">\n          Syrah\n        </li>\n        <li cdkOption=\"zinfandel\"\n            cdkOptionDisabled\n            class=\"example-option\">\n          Zinfandel <span class=\"example-sold-out\">(sold out)</span>\n        </li>\n        <li cdkOption=\"riesling\"\n            class=\"example-option\">\n          Riesling\n        </li>\n      </ul>\n      <!-- #enddocregion listbox -->\n    </div>\n  </section>\n</form>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-disabled {\n  border-color: rgba(0, 0, 0, 0.5);\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-disabled .example-listbox-label {\n  opacity: 0.5;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option[aria-disabled='true'] {\n  opacity: 0.5;\n}\n\n.example-option[aria-disabled='false']:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n\n.example-sold-out {\n  color: red;\n  font-size: 0.75em;\n  vertical-align: super;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtZGlzYWJsZWQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LWRpc2FibGVkL2Nkay1saXN0Ym94LWRpc2FibGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1kaXNhYmxlZC9jZGstbGlzdGJveC1kaXNhYmxlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFM0MsNENBQTRDO0FBQzVDLE1BTWEseUJBQXlCO0lBTnRDO1FBT0UsaUJBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN2Qzs7NkhBRlkseUJBQXlCO2lIQUF6Qix5QkFBeUIsNkdDVnRDLDRyQ0FxQ0E7U0QzQmEseUJBQXlCO2tHQUF6Qix5QkFBeUI7a0JBTnJDLFNBQVM7K0JBQ0UsOEJBQThCLFlBQzlCLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBMaXN0Ym94IHdpdGggZGlzYWJsZWQgb3B0aW9ucy4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saXN0Ym94LWRpc2FibGVkLWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hEaXNhYmxlZEV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1saXN0Ym94LWRpc2FibGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstbGlzdGJveC1kaXNhYmxlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtMaXN0Ym94RGlzYWJsZWRFeGFtcGxlIHtcbiAgY2FuRHJpbmtDdHJsID0gbmV3IEZvcm1Db250cm9sKGZhbHNlKTtcbn1cbiIsIjxmb3JtPlxuICA8cD5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjYW4tZHJpbmtcIiBbZm9ybUNvbnRyb2xdPVwiY2FuRHJpbmtDdHJsXCI+Jm5ic3A7XG4gICAgPGxhYmVsIGZvcj1cImNhbi1kcmlua1wiPkkgYW0gMjEgb3Igb2xkZXI8L2xhYmVsPlxuICA8L3A+XG4gIDxzZWN0aW9uPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtY29udGFpbmVyXCIgW2NsYXNzLmV4YW1wbGUtZGlzYWJsZWRdPVwiIWNhbkRyaW5rQ3RybC52YWx1ZVwiPlxuICAgICAgPCEtLSAjZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtd2luZS10eXBlLWxhYmVsXCI+XG4gICAgICAgIFdpbmUgU2VsZWN0aW9uXG4gICAgICA8L2xhYmVsPlxuICAgICAgPHVsIGNka0xpc3Rib3hcbiAgICAgICAgICBbY2RrTGlzdGJveERpc2FibGVkXT1cIiFjYW5Ecmlua0N0cmwudmFsdWVcIlxuICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtd2luZS10eXBlLWxhYmVsXCJcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdGJveFwiPlxuICAgICAgICA8bGkgY2RrT3B0aW9uPVwiY2FiZXJuZXRcIlxuICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAgICAgIENhYmVybmV0IFNhdXZpZ25vblxuICAgICAgICA8L2xpPlxuICAgICAgICA8bGkgY2RrT3B0aW9uPVwic3lyYWhcIlxuICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAgICAgIFN5cmFoXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaSBjZGtPcHRpb249XCJ6aW5mYW5kZWxcIlxuICAgICAgICAgICAgY2RrT3B0aW9uRGlzYWJsZWRcbiAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgICAgICBaaW5mYW5kZWwgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNvbGQtb3V0XCI+KHNvbGQgb3V0KTwvc3Bhbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpIGNka09wdGlvbj1cInJpZXNsaW5nXCJcbiAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgICAgICBSaWVzbGluZ1xuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDwhLS0gI2VuZGRvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG48L2Zvcm0+XG4iXX0=