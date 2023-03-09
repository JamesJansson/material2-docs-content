import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/stepper";
import * as i2 from "@angular/common";
/** @title A custom CDK stepper without a form */
class CdkCustomStepperWithoutFormExample {
}
CdkCustomStepperWithoutFormExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CdkCustomStepperWithoutFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkCustomStepperWithoutFormExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.2", type: CdkCustomStepperWithoutFormExample, selector: "cdk-custom-stepper-without-form-example", ngImport: i0, template: "<example-custom-stepper>\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\n</example-custom-stepper>\n", styles: [""], dependencies: [{ kind: "component", type: i0.forwardRef(function () { return i1.CdkStep; }), selector: "cdk-step", inputs: ["stepControl", "label", "errorMessage", "aria-label", "aria-labelledby", "state", "editable", "optional", "completed", "hasError"], outputs: ["interacted"], exportAs: ["cdkStep"] }, { kind: "component", type: i0.forwardRef(function () { return CustomStepper; }), selector: "example-custom-stepper" }] });
export { CdkCustomStepperWithoutFormExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CdkCustomStepperWithoutFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-custom-stepper-without-form-example', template: "<example-custom-stepper>\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\n</example-custom-stepper>\n" }]
        }] });
/** Custom CDK stepper component */
class CustomStepper extends CdkStepper {
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
}
CustomStepper.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CustomStepper, deps: null, target: i0.ɵɵFactoryTarget.Component });
CustomStepper.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.2", type: CustomStepper, selector: "example-custom-stepper", providers: [{ provide: CdkStepper, useExisting: CustomStepper }], usesInheritance: true, ngImport: i0, template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button\n      class=\"example-step\"\n      [class.example-active]=\"selectedIndex === i\"\n      *ngFor=\"let step of steps; let i = index\"\n      (click)=\"selectStepByIndex(i)\"\n    >\n      Step {{ i + 1 }}\n    </button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkStepperNext, selector: "button[cdkStepperNext]", inputs: ["type"] }, { kind: "directive", type: i1.CdkStepperPrevious, selector: "button[cdkStepperPrevious]", inputs: ["type"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
export { CustomStepper };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CustomStepper, decorators: [{
            type: Component,
            args: [{ selector: 'example-custom-stepper', providers: [{ provide: CdkStepper, useExisting: CustomStepper }], template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button\n      class=\"example-step\"\n      [class.example-active]=\"selectedIndex === i\"\n      *ngFor=\"let step of steps; let i = index\"\n      (click)=\"selectStepByIndex(i)\"\n    >\n      Step {{ i + 1 }}\n    </button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9leGFtcGxlLWN1c3RvbS1zdGVwcGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFaEQsaURBQWlEO0FBQ2pELE1BS2Esa0NBQWtDOztzSUFBbEMsa0NBQWtDOzBIQUFsQyxrQ0FBa0MsK0VDVC9DLDZMQUlBLGdZRGNhLGFBQWE7U0FUYixrQ0FBa0M7a0dBQWxDLGtDQUFrQztrQkFMOUMsU0FBUzsrQkFDRSx5Q0FBeUM7O0FBTXJELG1DQUFtQztBQUNuQyxNQU1hLGFBQWMsU0FBUSxVQUFVO0lBQzNDLGlCQUFpQixDQUFDLEtBQWE7UUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7aUhBSFUsYUFBYTtxR0FBYixhQUFhLGlEQUZiLENBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUMsQ0FBQyxpREVoQmhFLHdwQkFvQkE7U0ZGYSxhQUFhO2tHQUFiLGFBQWE7a0JBTnpCLFNBQVM7K0JBQ0Usd0JBQXdCLGFBR3ZCLENBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsZUFBZSxFQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1N0ZXBwZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcblxuLyoqIEB0aXRsZSBBIGN1c3RvbSBDREsgc3RlcHBlciB3aXRob3V0IGEgZm9ybSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlIHt9XG5cbi8qKiBDdXN0b20gQ0RLIHN0ZXBwZXIgY29tcG9uZW50ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLWN1c3RvbS1zdGVwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuY3NzJ10sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBDZGtTdGVwcGVyLCB1c2VFeGlzdGluZzogQ3VzdG9tU3RlcHBlcn1dLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21TdGVwcGVyIGV4dGVuZHMgQ2RrU3RlcHBlciB7XG4gIHNlbGVjdFN0ZXBCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgfVxufVxuIiwiPGV4YW1wbGUtY3VzdG9tLXN0ZXBwZXI+XG4gIDxjZGstc3RlcD4gPHA+VGhpcyBpcyBhbnkgY29udGVudCBvZiBcIlN0ZXAgMVwiPC9wPiA8L2Nkay1zdGVwPlxuICA8Y2RrLXN0ZXA+IDxwPlRoaXMgaXMgYW55IGNvbnRlbnQgb2YgXCJTdGVwIDJcIjwvcD4gPC9jZGstc3RlcD5cbjwvZXhhbXBsZS1jdXN0b20tc3RlcHBlcj5cbiIsIjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGhlYWRlcj5cbiAgICA8aDI+U3RlcCB7eyBzZWxlY3RlZEluZGV4ICsgMSB9fS97eyBzdGVwcy5sZW5ndGggfX08L2gyPlxuICA8L2hlYWRlcj5cblxuICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNlbGVjdGVkID8gc2VsZWN0ZWQuY29udGVudCA6IG51bGxcIj48L2Rpdj5cblxuICA8Zm9vdGVyIGNsYXNzPVwiZXhhbXBsZS1zdGVwLW5hdmlnYXRpb24tYmFyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbmF2LWJ1dHRvblwiIGNka1N0ZXBwZXJQcmV2aW91cz4mbGFycjs8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImV4YW1wbGUtc3RlcFwiXG4gICAgICBbY2xhc3MuZXhhbXBsZS1hY3RpdmVdPVwic2VsZWN0ZWRJbmRleCA9PT0gaVwiXG4gICAgICAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0U3RlcEJ5SW5kZXgoaSlcIlxuICAgID5cbiAgICAgIFN0ZXAge3sgaSArIDEgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1uYXYtYnV0dG9uXCIgY2RrU3RlcHBlck5leHQ+JnJhcnI7PC9idXR0b24+XG4gIDwvZm9vdGVyPlxuPC9zZWN0aW9uPlxuIl19