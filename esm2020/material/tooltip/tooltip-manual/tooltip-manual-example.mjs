import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * @title Tooltip that can be manually shown/hidden.
 */
class TooltipManualExample {
}
TooltipManualExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: TooltipManualExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TooltipManualExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.2", type: TooltipManualExample, selector: "tooltip-manual-example", ngImport: i0, template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>", styles: [".example-action-button {\n  margin-top: 16px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i2.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
export { TooltipManualExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: TooltipManualExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-manual-example', template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>", styles: [".example-action-button {\n  margin-top: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tYW51YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFDSCxNQUthLG9CQUFvQjs7d0hBQXBCLG9CQUFvQjs0R0FBcEIsb0JBQW9CLDhEQ1ZqQyxnOEJBMkJTO1NEakJJLG9CQUFvQjtrR0FBcEIsb0JBQW9CO2tCQUxoQyxTQUFTOytCQUNFLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB0aGF0IGNhbiBiZSBtYW51YWxseSBzaG93bi9oaWRkZW4uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLW1hbnVhbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwTWFudWFsRXhhbXBsZSB7fVxuIiwiPGRpdj5cbiAgPHNwYW4+IENsaWNrIHRoZSBmb2xsb3dpbmcgYnV0dG9ucyB0by4uLiA8L3NwYW4+XG4gIDxidXR0b24gbWF0LWJ1dHRvblxuICAgICAgICAgIChjbGljayk9XCJ0b29sdGlwLnNob3coKVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cgdG9vbHRpcCBvbiB0aGUgYnV0dG9uIGF0IHRoZSBlbmQgb2YgdGhpcyBzZWN0aW9uXCJcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiPlxuICAgIHNob3dcbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvblxuICAgICAgICAgIChjbGljayk9XCJ0b29sdGlwLmhpZGUoKVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkhpZGUgdG9vbHRpcCBvbiB0aGUgYnV0dG9uIGF0IHRoZSBlbmQgb2YgdGhpcyBzZWN0aW9uXCJcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiPlxuICAgIGhpZGVcbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvblxuICAgICAgICAgIChjbGljayk9XCJ0b29sdGlwLnRvZ2dsZSgpXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU2hvdy9IaWRlIHRvb2x0aXAgb24gdGhlIGJ1dHRvbiBhdCB0aGUgZW5kIG9mIHRoaXMgc2VjdGlvblwiXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIj5cbiAgICB0b2dnbGUgc2hvdy9oaWRlXG4gIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gI3Rvb2x0aXA9XCJtYXRUb29sdGlwXCJcbiAgICAgICAgbWF0VG9vbHRpcD1cIkluZm8gYWJvdXQgdGhlIGFjdGlvblwiXG4gICAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgYXJpYS10b29sdGlwPVwiQnV0dG9uIHRoYXQgZGlzcGxheXMgYW5kIGhpZGVzIGEgdG9vbHRpcCB0cmlnZ2VyZWQgYnkgb3RoZXIgYnV0dG9uc1wiPlxuICBBY3Rpb25cbjwvYnV0dG9uPiJdfQ==