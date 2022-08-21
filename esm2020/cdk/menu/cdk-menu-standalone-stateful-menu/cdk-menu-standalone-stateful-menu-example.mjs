import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/menu";
import * as i2 from "@angular/common";
/** @title Stateful Menu with Standalone Trigger. */
export class CdkMenuStandaloneStatefulMenuExample {
    constructor() {
        this.bold = false;
        this.italic = false;
        this.sizes = ['Small', 'Normal', 'Large'];
        this.selectedSize = 'Normal';
    }
    reset() {
        this.bold = false;
        this.italic = false;
        this.selectedSize = 'Normal';
    }
}
CdkMenuStandaloneStatefulMenuExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: CdkMenuStandaloneStatefulMenuExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuStandaloneStatefulMenuExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: CdkMenuStandaloneStatefulMenuExample, selector: "cdk-menu-standalone-stateful-menu-example", ngImport: i0, template: "<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <!-- #docregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"bold\"\n        (cdkMenuItemTriggered)=\"bold = !bold\">\n      Bold\n    </button>\n    <!-- #enddocregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"italic\"\n        (cdkMenuItemTriggered)=\"italic = !italic\">\n      Italic\n    </button>\n    <hr />\n    <div cdkMenuGroup>\n      <!-- #docregion size-items -->\n      <button\n          *ngFor=\"let size of sizes\"\n          cdkMenuItemRadio\n          class=\"example-menu-item\"\n          [cdkMenuItemChecked]=\"size === selectedSize\"\n          (cdkMenuItemTriggered)=\"selectedSize = size\">\n        {{size}}\n      </button>\n      <!-- #enddocregion size-items -->\n    </div>\n    <hr />\n    <!-- #docregion reset-item -->\n    <button cdkMenuItem\n            class=\"example-menu-item\"\n            (cdkMenuItemTriggered)=\"reset()\">Reset</button>\n    <!-- #enddocregion reset-item -->\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu .example-menu-item {\n  width: 100%;\n}\n\nhr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: i1.CdkMenuItemRadio, selector: "[cdkMenuItemRadio]", exportAs: ["cdkMenuItemRadio"] }, { kind: "directive", type: i1.CdkMenuItemCheckbox, selector: "[cdkMenuItemCheckbox]", exportAs: ["cdkMenuItemCheckbox"] }, { kind: "directive", type: i1.CdkMenuTrigger, selector: "[cdkMenuTriggerFor]", inputs: ["cdkMenuTriggerFor", "cdkMenuPosition"], outputs: ["cdkMenuOpened", "cdkMenuClosed"], exportAs: ["cdkMenuTriggerFor"] }, { kind: "directive", type: i1.CdkMenuGroup, selector: "[cdkMenuGroup]", exportAs: ["cdkMenuGroup"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: CdkMenuStandaloneStatefulMenuExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-standalone-stateful-menu-example', template: "<button [cdkMenuTriggerFor]=\"menu\" class=\"example-standalone-item\">Click me!</button>\n\n<ng-template #menu>\n  <div class=\"example-menu\" cdkMenu>\n    <!-- #docregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"bold\"\n        (cdkMenuItemTriggered)=\"bold = !bold\">\n      Bold\n    </button>\n    <!-- #enddocregion bold-item -->\n    <button\n        cdkMenuItemCheckbox\n        class=\"example-menu-item\"\n        [cdkMenuItemChecked]=\"italic\"\n        (cdkMenuItemTriggered)=\"italic = !italic\">\n      Italic\n    </button>\n    <hr />\n    <div cdkMenuGroup>\n      <!-- #docregion size-items -->\n      <button\n          *ngFor=\"let size of sizes\"\n          cdkMenuItemRadio\n          class=\"example-menu-item\"\n          [cdkMenuItemChecked]=\"size === selectedSize\"\n          (cdkMenuItemTriggered)=\"selectedSize = size\">\n        {{size}}\n      </button>\n      <!-- #enddocregion size-items -->\n    </div>\n    <hr />\n    <!-- #docregion reset-item -->\n    <button cdkMenuItem\n            class=\"example-menu-item\"\n            (cdkMenuItemTriggered)=\"reset()\">Reset</button>\n    <!-- #enddocregion reset-item -->\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu .example-menu-item {\n  width: 100%;\n}\n\nhr {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item,\n.example-standalone-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'] {\n  background-color: rgb(225, 225, 225);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDLG9EQUFvRDtBQU1wRCxNQUFNLE9BQU8sb0NBQW9DO0lBTGpEO1FBTUUsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNiLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFFZixVQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLGlCQUFZLEdBQXVCLFFBQVEsQ0FBQztLQU83QztJQUxDLEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQztJQUMvQixDQUFDOztzSUFYVSxvQ0FBb0M7MEhBQXBDLG9DQUFvQyxpRkNSakQsc3ZDQXlDQTtnR0RqQ2Esb0NBQW9DO2tCQUxoRCxTQUFTOytCQUNFLDJDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBTdGF0ZWZ1bCBNZW51IHdpdGggU3RhbmRhbG9uZSBUcmlnZ2VyLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVTdGFuZGFsb25lU3RhdGVmdWxNZW51RXhhbXBsZSB7XG4gIGJvbGQgPSBmYWxzZTtcbiAgaXRhbGljID0gZmFsc2U7XG5cbiAgc2l6ZXMgPSBbJ1NtYWxsJywgJ05vcm1hbCcsICdMYXJnZSddO1xuICBzZWxlY3RlZFNpemU6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICdOb3JtYWwnO1xuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuYm9sZCA9IGZhbHNlO1xuICAgIHRoaXMuaXRhbGljID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3RlZFNpemUgPSAnTm9ybWFsJztcbiAgfVxufVxuIiwiPGJ1dHRvbiBbY2RrTWVudVRyaWdnZXJGb3JdPVwibWVudVwiIGNsYXNzPVwiZXhhbXBsZS1zdGFuZGFsb25lLWl0ZW1cIj5DbGljayBtZSE8L2J1dHRvbj5cblxuPG5nLXRlbXBsYXRlICNtZW51PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cbiAgICA8IS0tICNkb2NyZWdpb24gYm9sZC1pdGVtIC0tPlxuICAgIDxidXR0b25cbiAgICAgICAgY2RrTWVudUl0ZW1DaGVja2JveFxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCJcbiAgICAgICAgW2Nka01lbnVJdGVtQ2hlY2tlZF09XCJib2xkXCJcbiAgICAgICAgKGNka01lbnVJdGVtVHJpZ2dlcmVkKT1cImJvbGQgPSAhYm9sZFwiPlxuICAgICAgQm9sZFxuICAgIDwvYnV0dG9uPlxuICAgIDwhLS0gI2VuZGRvY3JlZ2lvbiBib2xkLWl0ZW0gLS0+XG4gICAgPGJ1dHRvblxuICAgICAgICBjZGtNZW51SXRlbUNoZWNrYm94XG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIlxuICAgICAgICBbY2RrTWVudUl0ZW1DaGVja2VkXT1cIml0YWxpY1wiXG4gICAgICAgIChjZGtNZW51SXRlbVRyaWdnZXJlZCk9XCJpdGFsaWMgPSAhaXRhbGljXCI+XG4gICAgICBJdGFsaWNcbiAgICA8L2J1dHRvbj5cbiAgICA8aHIgLz5cbiAgICA8ZGl2IGNka01lbnVHcm91cD5cbiAgICAgIDwhLS0gI2RvY3JlZ2lvbiBzaXplLWl0ZW1zIC0tPlxuICAgICAgPGJ1dHRvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBzaXplIG9mIHNpemVzXCJcbiAgICAgICAgICBjZGtNZW51SXRlbVJhZGlvXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiXG4gICAgICAgICAgW2Nka01lbnVJdGVtQ2hlY2tlZF09XCJzaXplID09PSBzZWxlY3RlZFNpemVcIlxuICAgICAgICAgIChjZGtNZW51SXRlbVRyaWdnZXJlZCk9XCJzZWxlY3RlZFNpemUgPSBzaXplXCI+XG4gICAgICAgIHt7c2l6ZX19XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDwhLS0gI2VuZGRvY3JlZ2lvbiBzaXplLWl0ZW1zIC0tPlxuICAgIDwvZGl2PlxuICAgIDxociAvPlxuICAgIDwhLS0gI2RvY3JlZ2lvbiByZXNldC1pdGVtIC0tPlxuICAgIDxidXR0b24gY2RrTWVudUl0ZW1cbiAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIlxuICAgICAgICAgICAgKGNka01lbnVJdGVtVHJpZ2dlcmVkKT1cInJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuICAgIDwhLS0gI2VuZGRvY3JlZ2lvbiByZXNldC1pdGVtIC0tPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=