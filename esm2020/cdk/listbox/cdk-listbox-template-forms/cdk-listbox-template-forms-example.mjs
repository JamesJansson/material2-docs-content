import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/cdk/listbox";
/** @title Listbox with template-driven forms. */
export class CdkListboxTemplateFormsExample {
    constructor() {
        this.toppings = ['Extra Cheese', 'Mushrooms', 'Pepperoni', 'Sausage'];
        this.order = [];
    }
}
CdkListboxTemplateFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: CdkListboxTemplateFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkListboxTemplateFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: CdkListboxTemplateFormsExample, selector: "cdk-listbox-template-forms-example", exportAs: ["cdkListboxTemplateFormsExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-toppings-label\">\n    Choose Toppings\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      [(ngModel)]=\"order\"\n      aria-labelledby=\"example-toppings-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let topping of toppings\"\n        [cdkOption]=\"topping\"\n        class=\"example-option\">\n      {{topping}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your order: <b>{{order | json}}</b>&nbsp;\n  <button (click)=\"order = []\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: i3.CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "pipe", type: i1.JsonPipe, name: "json" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: CdkListboxTemplateFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-template-forms-example', exportAs: 'cdkListboxTemplateFormsExample', template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-toppings-label\">\n    Choose Toppings\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      [(ngModel)]=\"order\"\n      aria-labelledby=\"example-toppings-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let topping of toppings\"\n        [cdkOption]=\"topping\"\n        class=\"example-option\">\n      {{topping}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your order: <b>{{order | json}}</b>&nbsp;\n  <button (click)=\"order = []\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtdGVtcGxhdGUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LXRlbXBsYXRlLWZvcm1zL2Nkay1saXN0Ym94LXRlbXBsYXRlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC10ZW1wbGF0ZS1mb3Jtcy9jZGstbGlzdGJveC10ZW1wbGF0ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEMsaURBQWlEO0FBT2pELE1BQU0sT0FBTyw4QkFBOEI7SUFOM0M7UUFPRSxhQUFRLEdBQUcsQ0FBQyxjQUFjLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqRSxVQUFLLEdBQXNCLEVBQUUsQ0FBQztLQUMvQjs7Z0lBSFksOEJBQThCO29IQUE5Qiw4QkFBOEIsd0hDVDNDLDZuQkFzQkE7Z0dEYmEsOEJBQThCO2tCQU4xQyxTQUFTOytCQUNFLG9DQUFvQyxZQUNwQyxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTGlzdGJveCB3aXRoIHRlbXBsYXRlLWRyaXZlbiBmb3Jtcy4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saXN0Ym94LXRlbXBsYXRlLWZvcm1zLWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hUZW1wbGF0ZUZvcm1zRXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWxpc3Rib3gtdGVtcGxhdGUtZm9ybXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1saXN0Ym94LXRlbXBsYXRlLWZvcm1zLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hUZW1wbGF0ZUZvcm1zRXhhbXBsZSB7XG4gIHRvcHBpbmdzID0gWydFeHRyYSBDaGVlc2UnLCAnTXVzaHJvb21zJywgJ1BlcHBlcm9uaScsICdTYXVzYWdlJ107XG4gIG9yZGVyOiByZWFkb25seSBzdHJpbmdbXSA9IFtdO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1jb250YWluZXJcIj5cbiAgPCEtLSAjZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG4gIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1sYWJlbFwiIGlkPVwiZXhhbXBsZS10b3BwaW5ncy1sYWJlbFwiPlxuICAgIENob29zZSBUb3BwaW5nc1xuICA8L2xhYmVsPlxuICA8dWwgY2RrTGlzdGJveFxuICAgICAgY2RrTGlzdGJveE11bHRpcGxlXG4gICAgICBbKG5nTW9kZWwpXT1cIm9yZGVyXCJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtdG9wcGluZ3MtbGFiZWxcIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3hcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IHRvcHBpbmcgb2YgdG9wcGluZ3NcIlxuICAgICAgICBbY2RrT3B0aW9uXT1cInRvcHBpbmdcIlxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+XG4gICAgICB7e3RvcHBpbmd9fVxuICAgIDwvbGk+XG4gIDwvdWw+XG4gIDwhLS0gI2VuZGRvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuPC9kaXY+XG48cD5cbiAgWW91ciBvcmRlcjogPGI+e3tvcmRlciB8IGpzb259fTwvYj4mbmJzcDtcbiAgPGJ1dHRvbiAoY2xpY2spPVwib3JkZXIgPSBbXVwiPlJlc2V0PC9idXR0b24+XG48L3A+XG4iXX0=