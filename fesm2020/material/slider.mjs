import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i3 from '@angular/material/legacy-card';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import * as i4 from '@angular/material/legacy-checkbox';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import * as i6 from '@angular/material/legacy-input';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import * as i1$1 from '@angular/material/legacy-slider';
import { MatLegacySliderModule } from '@angular/material/legacy-slider';
import * as i5 from '@angular/material/legacy-form-field';

/**
 * @title Configurable slider
 */
class SliderConfigurableExample {
    constructor() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this.tickInterval = 1;
    }
    getSliderTickInterval() {
        if (this.showTicks) {
            return this.autoTicks ? 'auto' : this.tickInterval;
        }
        return 0;
    }
}
SliderConfigurableExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderConfigurableExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: SliderConfigurableExample, selector: "slider-configurable-example", ngImport: i0, template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin example-width\" appearance=\"fill\">\n        <mat-label>Value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\" appearance=\"fill\">\n        <mat-label>Min value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\" appearance=\"fill\">\n        <mat-label>Max value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\" appearance=\"fill\">\n        <mat-label>Step size</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin example-width\" appearance=\"fill\" *ngIf=\"showTicks && !autoTicks\">\n        <mat-label>Tick interval</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-result-card\">\n  <mat-card-content>\n    <h2>Result</h2>\n    <br>\n    <br>\n\n    <div class=\"example-label-container\" [class]=\"vertical ? 'example-label-vertical' : 'example-label-horizontal'\">\n      <label id=\"example-name-label\" class=\"example-name-label\">Max Value</label>\n      <label class=\"example-value-label\">{{value}}</label>\n    </div>\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [invert]=\"invert\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [thumbLabel]=\"thumbLabel\"\n        [tickInterval]=\"getSliderTickInterval()\"\n        [(ngModel)]=\"value\"\n        [vertical]=\"vertical\"\n        aria-labelledby=\"example-name-label\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 0 8px 16px;\n}\n\n.example-section {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: center;\n}\n\n.example-margin {\n  margin: 8px;\n}\n.example-width {\n  max-width: 180px;\n  width: 100%;\n}\n\n.mat-slider-horizontal {\n  max-width: 300px;\n  width: 100%;\n}\n\n.mat-slider-vertical {\n  height: 300px;\n}\n\n.mat-card + .mat-card {\n  margin-top: 8px;\n}\n\n.example-result-card h2 {\n  margin: 0 8px;\n}\n\n.example-result-card .example-label-container.example-label-horizontal {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 12px 16px;\n  max-width: 284px;\n}\n\n.example-result-card .example-label-container.example-label-vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 68px;\n  height: 48px;\n}\n\n.example-result-card .example-value-label {\n  font-weight: 600;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i3.MatLegacyCard, selector: "mat-card", exportAs: ["matCard"] }, { kind: "directive", type: i3.MatLegacyCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { kind: "component", type: i4.MatLegacyCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: i5.MatLegacyFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLegacyLabel, selector: "mat-label" }, { kind: "directive", type: i6.MatLegacyInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", exportAs: ["matInput"] }, { kind: "component", type: i1$1.MatLegacySlider, selector: "mat-slider", inputs: ["disabled", "color", "tabIndex", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "value", "displayWith", "valueText", "vertical"], outputs: ["change", "input", "valueChange"], exportAs: ["matSlider"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-configurable-example', template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin example-width\" appearance=\"fill\">\n        <mat-label>Value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\" appearance=\"fill\">\n        <mat-label>Min value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\" appearance=\"fill\">\n        <mat-label>Max value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\" appearance=\"fill\">\n        <mat-label>Step size</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin example-width\" appearance=\"fill\" *ngIf=\"showTicks && !autoTicks\">\n        <mat-label>Tick interval</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-result-card\">\n  <mat-card-content>\n    <h2>Result</h2>\n    <br>\n    <br>\n\n    <div class=\"example-label-container\" [class]=\"vertical ? 'example-label-vertical' : 'example-label-horizontal'\">\n      <label id=\"example-name-label\" class=\"example-name-label\">Max Value</label>\n      <label class=\"example-value-label\">{{value}}</label>\n    </div>\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [invert]=\"invert\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [thumbLabel]=\"thumbLabel\"\n        [tickInterval]=\"getSliderTickInterval()\"\n        [(ngModel)]=\"value\"\n        [vertical]=\"vertical\"\n        aria-labelledby=\"example-name-label\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 0 8px 16px;\n}\n\n.example-section {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: center;\n}\n\n.example-margin {\n  margin: 8px;\n}\n.example-width {\n  max-width: 180px;\n  width: 100%;\n}\n\n.mat-slider-horizontal {\n  max-width: 300px;\n  width: 100%;\n}\n\n.mat-slider-vertical {\n  height: 300px;\n}\n\n.mat-card + .mat-card {\n  margin-top: 8px;\n}\n\n.example-result-card h2 {\n  margin: 0 8px;\n}\n\n.example-result-card .example-label-container.example-label-horizontal {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 12px 16px;\n  max-width: 284px;\n}\n\n.example-result-card .example-label-container.example-label-vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 68px;\n  height: 48px;\n}\n\n.example-result-card .example-value-label {\n  font-weight: 600;\n}\n"] }]
        }] });

/**
 * @title Slider with custom thumb label formatting.
 */
class SliderFormattingExample {
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
SliderFormattingExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderFormattingExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderFormattingExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: SliderFormattingExample, selector: "slider-formatting-example", ngImport: i0, template: "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  step=\"1000\"\n  min=\"0\"\n  max=\"100000\"\n  aria-label=\"units\"></mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "component", type: i1$1.MatLegacySlider, selector: "mat-slider", inputs: ["disabled", "color", "tabIndex", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "value", "displayWith", "valueText", "vertical"], outputs: ["change", "input", "valueChange"], exportAs: ["matSlider"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderFormattingExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-formatting-example', template: "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  step=\"1000\"\n  min=\"0\"\n  max=\"100000\"\n  aria-label=\"units\"></mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });

/**
 * @title Basic slider
 */
class SliderOverviewExample {
}
SliderOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: SliderOverviewExample, selector: "slider-overview-example", ngImport: i0, template: "<mat-slider aria-label=\"unit(s)\"></mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "component", type: i1$1.MatLegacySlider, selector: "mat-slider", inputs: ["disabled", "color", "tabIndex", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "value", "displayWith", "valueText", "vertical"], outputs: ["change", "input", "valueChange"], exportAs: ["matSlider"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-overview-example', template: "<mat-slider aria-label=\"unit(s)\"></mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatSliderHarness
 */
class SliderHarnessExample {
}
SliderHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: SliderHarnessExample, selector: "slider-harness-example", ngImport: i0, template: "<mat-slider value=\"50\" aria-label=\"unit(s)\"></mat-slider>\n", dependencies: [{ kind: "component", type: i1$1.MatLegacySlider, selector: "mat-slider", inputs: ["disabled", "color", "tabIndex", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "value", "displayWith", "valueText", "vertical"], outputs: ["change", "input", "valueChange"], exportAs: ["matSlider"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-harness-example', template: "<mat-slider value=\"50\" aria-label=\"unit(s)\"></mat-slider>\n" }]
        }] });

const EXAMPLES = [
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderHarnessExample,
    SliderOverviewExample,
];
class SliderExamplesModule {
}
SliderExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SliderExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderExamplesModule, declarations: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample], imports: [CommonModule,
        FormsModule,
        MatLegacyCardModule,
        MatLegacyCheckboxModule,
        MatLegacyInputModule,
        MatLegacySliderModule], exports: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample] });
SliderExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderExamplesModule, imports: [CommonModule,
        FormsModule,
        MatLegacyCardModule,
        MatLegacyCheckboxModule,
        MatLegacyInputModule,
        MatLegacySliderModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SliderExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatLegacyCardModule,
                        MatLegacyCheckboxModule,
                        MatLegacyInputModule,
                        MatLegacySliderModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SliderConfigurableExample, SliderExamplesModule, SliderFormattingExample, SliderHarnessExample, SliderOverviewExample };
//# sourceMappingURL=slider.mjs.map
