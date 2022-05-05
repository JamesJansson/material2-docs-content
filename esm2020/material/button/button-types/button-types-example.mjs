import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
/**
 * @title Button varieties
 */
export class ButtonTypesExample {
}
ButtonTypesExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: ButtonTypesExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonTypesExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-next.16", type: ButtonTypesExample, selector: "button-types-example", ngImport: i0, template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab>Basic</button>\n  <button mat-fab color=\"primary\">Primary</button>\n  <button mat-fab color=\"accent\">Accent</button>\n  <button mat-fab color=\"warn\">Warn</button>\n  <button mat-fab disabled>Disabled</button>\n  <button mat-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-fab routerLink=\".\">Link</a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab>Basic</button>\n  <button mat-mini-fab color=\"primary\">Primary</button>\n  <button mat-mini-fab color=\"accent\">Accent</button>\n  <button mat-mini-fab color=\"warn\">Warn</button>\n  <button mat-mini-fab disabled>Disabled</button>\n  <button mat-mini-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-mini-fab routerLink=\".\">Link</a>\n</div>\n", styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i1.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-icon-button], a[mat-fab],             a[mat-mini-fab], a[mat-stroked-button], a[mat-flat-button]", inputs: ["disabled", "disableRipple", "color", "tabIndex"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: ButtonTypesExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-types-example', template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab>Basic</button>\n  <button mat-fab color=\"primary\">Primary</button>\n  <button mat-fab color=\"accent\">Accent</button>\n  <button mat-fab color=\"warn\">Warn</button>\n  <button mat-fab disabled>Disabled</button>\n  <button mat-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-fab routerLink=\".\">Link</a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab>Basic</button>\n  <button mat-mini-fab color=\"primary\">Primary</button>\n  <button mat-mini-fab color=\"accent\">Accent</button>\n  <button mat-mini-fab color=\"warn\">Warn</button>\n  <button mat-mini-fab disabled>Disabled</button>\n  <button mat-mini-fab aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <a mat-mini-fab routerLink=\".\">Link</a>\n</div>\n", styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXR5cGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLXR5cGVzL2J1dHRvbi10eXBlcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi10eXBlcy9idXR0b24tdHlwZXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sa0JBQWtCOzt1SEFBbEIsa0JBQWtCOzJHQUFsQixrQkFBa0IsNERDVi9CLDZ1R0FvRkE7bUdEMUVhLGtCQUFrQjtrQkFMOUIsU0FBUzsrQkFDRSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJ1dHRvbiB2YXJpZXRpZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXR5cGVzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi10eXBlcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYnV0dG9uLXR5cGVzLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblR5cGVzRXhhbXBsZSB7fVxuIiwiPGgzPkJhc2ljIEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICA8YSBtYXQtYnV0dG9uIHJvdXRlckxpbms9XCIuXCI+TGluazwvYT5cbjwvZGl2PlxuXG48aDM+UmFpc2VkIEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gIDxhIG1hdC1yYWlzZWQtYnV0dG9uIHJvdXRlckxpbms9XCIuXCI+TGluazwvYT5cbjwvZGl2PlxuXG48aDM+U3Ryb2tlZCBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtc3Ryb2tlZC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gIDxhIG1hdC1zdHJva2VkLWJ1dHRvbiByb3V0ZXJMaW5rPVwiLlwiPkxpbms8L2E+XG48L2Rpdj5cblxuPGgzPkZsYXQgQnV0dG9uczwvaDM+XG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uPkJhc2ljPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICA8YSBtYXQtZmxhdC1idXR0b24gcm91dGVyTGluaz1cIi5cIj5MaW5rPC9hPlxuPC9kaXY+XG5cbjxoMz5JY29uIEJ1dHRvbnM8L2gzPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwid2FyblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG48L2Rpdj5cblxuPGgzPkZhYiBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtZmFiPkJhc2ljPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZhYiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gIDxidXR0b24gbWF0LWZhYiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mYWIgY29sb3I9XCJ3YXJuXCI+V2FybjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1mYWIgZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtZmFiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxhIG1hdC1mYWIgcm91dGVyTGluaz1cIi5cIj5MaW5rPC9hPlxuPC9kaXY+XG5cbjxoMz5NaW5pIEZhYiBCdXR0b25zPC9oMz5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWI+QmFzaWM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCI+UHJpbWFyeTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1taW5pLWZhYiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1pbmktZmFiIGRpc2FibGVkPkRpc2FibGVkPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1pbmktZmFiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggYSBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxhIG1hdC1taW5pLWZhYiByb3V0ZXJMaW5rPVwiLlwiPkxpbms8L2E+XG48L2Rpdj5cbiJdfQ==