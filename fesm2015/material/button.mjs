import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';

/**
 * @title Basic buttons
 */
class ButtonOverviewExample {
}
ButtonOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ButtonOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: ButtonOverviewExample, selector: "button-overview-example", ngImport: i0, template: "<section>\n  <div class=\"example-label\">Basic</div>\n  <div class=\"example-button-row\">\n    <button mat-button>Basic</button>\n    <button mat-button color=\"primary\">Primary</button>\n    <button mat-button color=\"accent\">Accent</button>\n    <button mat-button color=\"warn\">Warn</button>\n    <button mat-button disabled>Disabled</button>\n    <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Raised</div>\n  <div class=\"example-button-row\">\n    <button mat-raised-button>Basic</button>\n    <button mat-raised-button color=\"primary\">Primary</button>\n    <button mat-raised-button color=\"accent\">Accent</button>\n    <button mat-raised-button color=\"warn\">Warn</button>\n    <button mat-raised-button disabled>Disabled</button>\n    <a mat-raised-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Stroked</div>\n  <div class=\"example-button-row\">\n    <button mat-stroked-button>Basic</button>\n    <button mat-stroked-button color=\"primary\">Primary</button>\n    <button mat-stroked-button color=\"accent\">Accent</button>\n    <button mat-stroked-button color=\"warn\">Warn</button>\n    <button mat-stroked-button disabled>Disabled</button>\n    <a mat-stroked-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Flat</div>\n  <div class=\"example-button-row\">\n    <button mat-flat-button>Basic</button>\n    <button mat-flat-button color=\"primary\">Primary</button>\n    <button mat-flat-button color=\"accent\">Accent</button>\n    <button mat-flat-button color=\"warn\">Warn</button>\n    <button mat-flat-button disabled>Disabled</button>\n    <a mat-flat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Icon</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\n        <mat-icon>home</mat-icon>\n      </button>\n      <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button disabled aria-label=\"Example icon button with a open in new tab icon\">\n        <mat-icon>open_in_new</mat-icon>\n      </button>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"accent\" aria-label=\"Example icon button with a bookmark icon\">\n          <mat-icon>bookmark</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"warn\" aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab disabled aria-label=\"Example icon button with a heart icon\">\n          <mat-icon>favorite</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Mini FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"accent\" aria-label=\"Example icon button with a plus one icon\">\n          <mat-icon>plus_one</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"warn\" aria-label=\"Example icon button with a filter list icon\">\n          <mat-icon>filter_list</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: ["section {\n  display: table;\n}\n\n.example-label {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row .mat-button-base {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatMiniFabButton, selector: "button[mat-mini-fab]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatFabButton, selector: "button[mat-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex", "extended"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ButtonOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-overview-example', template: "<section>\n  <div class=\"example-label\">Basic</div>\n  <div class=\"example-button-row\">\n    <button mat-button>Basic</button>\n    <button mat-button color=\"primary\">Primary</button>\n    <button mat-button color=\"accent\">Accent</button>\n    <button mat-button color=\"warn\">Warn</button>\n    <button mat-button disabled>Disabled</button>\n    <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Raised</div>\n  <div class=\"example-button-row\">\n    <button mat-raised-button>Basic</button>\n    <button mat-raised-button color=\"primary\">Primary</button>\n    <button mat-raised-button color=\"accent\">Accent</button>\n    <button mat-raised-button color=\"warn\">Warn</button>\n    <button mat-raised-button disabled>Disabled</button>\n    <a mat-raised-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Stroked</div>\n  <div class=\"example-button-row\">\n    <button mat-stroked-button>Basic</button>\n    <button mat-stroked-button color=\"primary\">Primary</button>\n    <button mat-stroked-button color=\"accent\">Accent</button>\n    <button mat-stroked-button color=\"warn\">Warn</button>\n    <button mat-stroked-button disabled>Disabled</button>\n    <a mat-stroked-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Flat</div>\n  <div class=\"example-button-row\">\n    <button mat-flat-button>Basic</button>\n    <button mat-flat-button color=\"primary\">Primary</button>\n    <button mat-flat-button color=\"accent\">Accent</button>\n    <button mat-flat-button color=\"warn\">Warn</button>\n    <button mat-flat-button disabled>Disabled</button>\n    <a mat-flat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Icon</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\n        <mat-icon>home</mat-icon>\n      </button>\n      <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button disabled aria-label=\"Example icon button with a open in new tab icon\">\n        <mat-icon>open_in_new</mat-icon>\n      </button>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"accent\" aria-label=\"Example icon button with a bookmark icon\">\n          <mat-icon>bookmark</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"warn\" aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab disabled aria-label=\"Example icon button with a heart icon\">\n          <mat-icon>favorite</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Mini FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"accent\" aria-label=\"Example icon button with a plus one icon\">\n          <mat-icon>plus_one</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"warn\" aria-label=\"Example icon button with a filter list icon\">\n          <mat-icon>filter_list</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: ["section {\n  display: table;\n}\n\n.example-label {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row {\n  display: table-cell;\n  width: 490px;\n}\n\n.example-button-row .mat-button-base {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n"] }]
        }] });

/**
 * @title Button varieties
 */
class ButtonTypesExample {
}
ButtonTypesExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ButtonTypesExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonTypesExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: ButtonTypesExample, selector: "button-types-example", ngImport: i0, template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab>Basic</button>\n  <button mat-fab color=\"primary\">Primary</button>\n  <button mat-fab color=\"accent\">Accent</button>\n  <button mat-fab color=\"warn\">Warn</button>\n  <button mat-fab disabled>Disabled</button>\n  <button mat-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-fab routerLink=\".\">Link</a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab>Basic</button>\n  <button mat-mini-fab color=\"primary\">Primary</button>\n  <button mat-mini-fab color=\"accent\">Accent</button>\n  <button mat-mini-fab color=\"warn\">Warn</button>\n  <button mat-mini-fab disabled>Disabled</button>\n  <button mat-mini-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-mini-fab routerLink=\".\">Link</a>\n</div>\n", styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatMiniFabAnchor, selector: "a[mat-mini-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatMiniFabButton, selector: "button[mat-mini-fab]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatFabAnchor, selector: "a[mat-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex", "extended"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatFabButton, selector: "button[mat-fab]", inputs: ["disabled", "disableRipple", "color", "tabIndex", "extended"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ButtonTypesExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-types-example', template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab>Basic</button>\n  <button mat-fab color=\"primary\">Primary</button>\n  <button mat-fab color=\"accent\">Accent</button>\n  <button mat-fab color=\"warn\">Warn</button>\n  <button mat-fab disabled>Disabled</button>\n  <button mat-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-fab routerLink=\".\">Link</a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab>Basic</button>\n  <button mat-mini-fab color=\"primary\">Primary</button>\n  <button mat-mini-fab color=\"accent\">Accent</button>\n  <button mat-mini-fab color=\"warn\">Warn</button>\n  <button mat-mini-fab disabled>Disabled</button>\n  <button mat-mini-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-mini-fab routerLink=\".\">Link</a>\n</div>\n", styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatButtonHarness
 */
class ButtonHarnessExample {
    constructor() {
        this.clicked = false;
    }
}
ButtonHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ButtonHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: ButtonHarnessExample, selector: "button-harness-example", ngImport: i0, template: "<button id=\"basic\" type=\"button\" mat-button (click)=\"clicked = true\">\n  Basic button\n</button>\n", dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ButtonHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-harness-example', template: "<button id=\"basic\" type=\"button\" mat-button (click)=\"clicked = true\">\n  Basic button\n</button>\n" }]
        }] });

const EXAMPLES = [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample];
class ButtonExamplesModule {
}
ButtonExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ButtonExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0-next.1", ngImport: i0, type: ButtonExamplesModule, declarations: [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample], imports: [MatButtonModule, MatDividerModule, MatIconModule], exports: [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample] });
ButtonExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ButtonExamplesModule, imports: [MatButtonModule, MatDividerModule, MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ButtonExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatDividerModule, MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonExamplesModule, ButtonHarnessExample, ButtonOverviewExample, ButtonTypesExample };
//# sourceMappingURL=button.mjs.map
