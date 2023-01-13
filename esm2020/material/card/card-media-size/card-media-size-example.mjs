import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
/**
 * @title Card with media size
 */
export class CardMediaSizeExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
}
CardMediaSizeExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: CardMediaSizeExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardMediaSizeExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-rc.0", type: CardMediaSizeExample, selector: "card-media-size-example", ngImport: i0, template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Small</mat-card-subtitle>\n      <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Medium</mat-card-subtitle>\n      <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"  alt=\"Image of a Shiba Inu\">\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Large</mat-card-subtitle>\n      <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Extra large</mat-card-subtitle>\n      <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardLgImage, selector: "[mat-card-lg-image], [matCardImageLarge]" }, { kind: "directive", type: i1.MatCardMdImage, selector: "[mat-card-md-image], [matCardImageMedium]" }, { kind: "directive", type: i1.MatCardSmImage, selector: "[mat-card-sm-image], [matCardImageSmall]" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "component", type: i1.MatCardTitleGroup, selector: "mat-card-title-group" }, { kind: "directive", type: i1.MatCardXlImage, selector: "[mat-card-xl-image], [matCardImageXLarge]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: CardMediaSizeExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-media-size-example', template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Small</mat-card-subtitle>\n      <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Medium</mat-card-subtitle>\n      <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"  alt=\"Image of a Shiba Inu\">\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Large</mat-card-subtitle>\n      <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Extra large</mat-card-subtitle>\n      <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1tZWRpYS1zaXplLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2NhcmQtbWVkaWEtc2l6ZS9jYXJkLW1lZGlhLXNpemUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1tZWRpYS1zaXplL2NhcmQtbWVkaWEtc2l6ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjtJQUxqQztRQU1FLGFBQVEsR0FBRzs7K0JBRWtCLENBQUM7S0FDL0I7O3NIQUpZLG9CQUFvQjswR0FBcEIsb0JBQW9CLCtEQ1ZqQyw0ckRBb0RBO2dHRDFDYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDYXJkIHdpdGggbWVkaWEgc2l6ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXJkLW1lZGlhLXNpemUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1tZWRpYS1zaXplLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYXJkLW1lZGlhLXNpemUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZE1lZGlhU2l6ZUV4YW1wbGUge1xuICBsb25nVGV4dCA9IGBUaGUgU2hpYmEgSW51IGlzIHRoZSBzbWFsbGVzdCBvZiB0aGUgc2l4IG9yaWdpbmFsIGFuZCBkaXN0aW5jdCBzcGl0eiBicmVlZHMgb2YgZG9nXG4gIGZyb20gSmFwYW4uIEEgc21hbGwsIGFnaWxlIGRvZyB0aGF0IGNvcGVzIHZlcnkgd2VsbCB3aXRoIG1vdW50YWlub3VzIHRlcnJhaW4sIHRoZSBTaGliYSBJbnUgd2FzXG4gIG9yaWdpbmFsbHkgYnJlZCBmb3IgaHVudGluZy5gO1xufVxuIiwiPCEtLSBDYXJkcyB3aXRoIG1lZGlhIGFyZWEgLS0+XG48bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLWhlYWRlcj5cbiAgICA8bWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gICAgICA8bWF0LWNhcmQtdGl0bGU+U2hpYmEgSW51PC9tYXQtY2FyZC10aXRsZT5cbiAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5TbWFsbDwvbWF0LWNhcmQtc3VidGl0bGU+XG4gICAgICA8aW1nIG1hdC1jYXJkLXNtLWltYWdlIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMi5qcGdcIiA+XG4gICAgPC9tYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgPC9tYXQtY2FyZC1oZWFkZXI+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIHt7bG9uZ1RleHR9fVxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLWhlYWRlcj5cbiAgICA8bWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gICAgICA8bWF0LWNhcmQtdGl0bGU+U2hpYmEgSW51PC9tYXQtY2FyZC10aXRsZT5cbiAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5NZWRpdW08L21hdC1jYXJkLXN1YnRpdGxlPlxuICAgICAgPGltZyBtYXQtY2FyZC1tZC1pbWFnZSBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTIuanBnXCIgIGFsdD1cIkltYWdlIG9mIGEgU2hpYmEgSW51XCI+XG4gICAgPC9tYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgPC9tYXQtY2FyZC1oZWFkZXI+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIHt7bG9uZ1RleHR9fVxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLWhlYWRlcj5cbiAgICA8bWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gICAgICA8bWF0LWNhcmQtdGl0bGU+U2hpYmEgSW51PC9tYXQtY2FyZC10aXRsZT5cbiAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5MYXJnZTwvbWF0LWNhcmQtc3VidGl0bGU+XG4gICAgICA8aW1nIG1hdC1jYXJkLWxnLWltYWdlIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMi5qcGdcIiA+XG4gICAgPC9tYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgPC9tYXQtY2FyZC1oZWFkZXI+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIHt7bG9uZ1RleHR9fVxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuXG48bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLWhlYWRlcj5cbiAgICA8bWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gICAgICA8bWF0LWNhcmQtdGl0bGU+U2hpYmEgSW51PC9tYXQtY2FyZC10aXRsZT5cbiAgICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5FeHRyYSBsYXJnZTwvbWF0LWNhcmQtc3VidGl0bGU+XG4gICAgICA8aW1nIG1hdC1jYXJkLXhsLWltYWdlIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMi5qcGdcIiA+XG4gICAgPC9tYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgPC9tYXQtY2FyZC1oZWFkZXI+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIHt7bG9uZ1RleHR9fVxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG48L21hdC1jYXJkPlxuIl19