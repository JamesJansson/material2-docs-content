import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with aligned labels
 */
export class TabGroupAlignExample {
}
TabGroupAlignExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TabGroupAlignExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabGroupAlignExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: TabGroupAlignExample, selector: "tab-group-align-example", ngImport: i0, template: "<!-- #docregion align-start -->\n<mat-tab-group mat-align-tabs=\"start\">\n<!-- #enddocregion align-start -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"center\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"end\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"], components: [{ type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple"], exportAs: ["matTabGroup"] }, { type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby"], exportAs: ["matTab"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TabGroupAlignExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-align-example', template: "<!-- #docregion align-start -->\n<mat-tab-group mat-align-tabs=\"start\">\n<!-- #enddocregion align-start -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"center\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"end\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFsaWduLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1hbGlnbi90YWItZ3JvdXAtYWxpZ24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFsaWduL3RhYi1ncm91cC1hbGlnbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtxR0FBcEIsb0JBQW9CLCtEQ1ZqQyxpckJBbUJBOzJGRFRhLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIGFsaWduZWQgbGFiZWxzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1hbGlnbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtYWxpZ24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1hbGlnbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEFsaWduRXhhbXBsZSB7fVxuIiwiPCEtLSAjZG9jcmVnaW9uIGFsaWduLXN0YXJ0IC0tPlxuPG1hdC10YWItZ3JvdXAgbWF0LWFsaWduLXRhYnM9XCJzdGFydFwiPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGFsaWduLXN0YXJ0IC0tPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+Q29udGVudCAxPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPkNvbnRlbnQgMjwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPkNvbnRlbnQgMzwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cblxuPG1hdC10YWItZ3JvdXAgbWF0LWFsaWduLXRhYnM9XCJjZW50ZXJcIj5cbiAgPG1hdC10YWIgbGFiZWw9XCJGaXJzdFwiPkNvbnRlbnQgMTwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj5Db250ZW50IDI8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiVGhpcmRcIj5Db250ZW50IDM8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG5cbjxtYXQtdGFiLWdyb3VwIG1hdC1hbGlnbi10YWJzPVwiZW5kXCI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5Db250ZW50IDE8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+Q29udGVudCAyPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+Q29udGVudCAzPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19