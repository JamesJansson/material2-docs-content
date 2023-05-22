import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/badge";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Badge overview
 */
class BadgeOverviewExample {
    constructor() {
        this.hidden = false;
    }
    toggleBadgeVisibility() {
        this.hidden = !this.hidden;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BadgeOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: BadgeOverviewExample, isStandalone: true, selector: "badge-overview-example", ngImport: i0, template: "<!-- #docregion mat-badge-overlap -->\n  <div matBadge=\"4\" matBadgeOverlap=\"false\" class=\"demo-section\">Text with a badge</div>\n<!-- #enddocregion mat-badge-overlap -->\n\n<!-- #docregion mat-badge-size -->\n  <div matBadge=\"1\" matBadgeSize=\"large\" class=\"demo-section\">Text with large badge</div>\n<!-- #enddocregion mat-badge-size -->\n\n<div class=\"demo-section\">\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</div>\n\n<div class=\"demo-section\">\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n  </div>\n\n<div class=\"demo-section\">\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</div>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.demo-section + .demo-section {\n  margin-top: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i1.MatBadge, selector: "[matBadge]", inputs: ["matBadgeDisabled", "matBadgeColor", "matBadgeOverlap", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
export { BadgeOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: BadgeOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-overview-example', standalone: true, imports: [MatBadgeModule, MatButtonModule, MatIconModule], template: "<!-- #docregion mat-badge-overlap -->\n  <div matBadge=\"4\" matBadgeOverlap=\"false\" class=\"demo-section\">Text with a badge</div>\n<!-- #enddocregion mat-badge-overlap -->\n\n<!-- #docregion mat-badge-size -->\n  <div matBadge=\"1\" matBadgeSize=\"large\" class=\"demo-section\">Text with large badge</div>\n<!-- #enddocregion mat-badge-size -->\n\n<div class=\"demo-section\">\n  Button with a badge on the left\n<!-- #docregion mat-badge-position -->\n  <button mat-raised-button color=\"primary\"\n      matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n    Action\n  </button>\n<!-- #enddocregion mat-badge-position -->\n</div>\n\n<div class=\"demo-section\">\n    Button toggles badge visibility\n<!-- #docregion mat-badge-hide -->\n    <button mat-raised-button matBadge=\"7\" [matBadgeHidden]=\"hidden\" (click)=\"toggleBadgeVisibility()\">\n        Hide\n    </button>\n<!-- #enddocregion mat-badge-hide -->\n  </div>\n\n<div class=\"demo-section\">\n  Icon with a badge\n<!-- #docregion mat-badge-color -->\n  <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n<!-- #enddocregion mat-badge-color -->\n    <!-- Include text description of the icon's meaning for screen-readers -->\n    <span class=\"cdk-visually-hidden\">\n      Example with a home icon with overlaid badge showing the number 15\n    </span>\n</div>\n", styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n.demo-section + .demo-section {\n  margin-top: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2JhZGdlL2JhZGdlLW92ZXJ2aWV3L2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1vdmVydmlldy9iYWRnZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFFdkQ7O0dBRUc7QUFDSCxNQU9hLG9CQUFvQjtJQVBqQztRQVFFLFdBQU0sR0FBRyxLQUFLLENBQUM7S0FLaEI7SUFIQyxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQzs4R0FMVSxvQkFBb0I7a0dBQXBCLG9CQUFvQixrRkNmakMsdzFDQXFDQSx5TUR4QlksY0FBYywyUEFBRSxlQUFlLDJRQUFFLGFBQWE7O1NBRTdDLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQVBoQyxTQUFTOytCQUNFLHdCQUF3QixjQUd0QixJQUFJLFdBQ1AsQ0FBQyxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0QmFkZ2VNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JhZGdlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFkZ2Ugb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2JhZGdlLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCYWRnZU1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VPdmVydmlld0V4YW1wbGUge1xuICBoaWRkZW4gPSBmYWxzZTtcblxuICB0b2dnbGVCYWRnZVZpc2liaWxpdHkoKSB7XG4gICAgdGhpcy5oaWRkZW4gPSAhdGhpcy5oaWRkZW47XG4gIH1cbn1cbiIsIjwhLS0gI2RvY3JlZ2lvbiBtYXQtYmFkZ2Utb3ZlcmxhcCAtLT5cbiAgPGRpdiBtYXRCYWRnZT1cIjRcIiBtYXRCYWRnZU92ZXJsYXA9XCJmYWxzZVwiIGNsYXNzPVwiZGVtby1zZWN0aW9uXCI+VGV4dCB3aXRoIGEgYmFkZ2U8L2Rpdj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYmFkZ2Utb3ZlcmxhcCAtLT5cblxuPCEtLSAjZG9jcmVnaW9uIG1hdC1iYWRnZS1zaXplIC0tPlxuICA8ZGl2IG1hdEJhZGdlPVwiMVwiIG1hdEJhZGdlU2l6ZT1cImxhcmdlXCIgY2xhc3M9XCJkZW1vLXNlY3Rpb25cIj5UZXh0IHdpdGggbGFyZ2UgYmFkZ2U8L2Rpdj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYmFkZ2Utc2l6ZSAtLT5cblxuPGRpdiBjbGFzcz1cImRlbW8tc2VjdGlvblwiPlxuICBCdXR0b24gd2l0aCBhIGJhZGdlIG9uIHRoZSBsZWZ0XG48IS0tICNkb2NyZWdpb24gbWF0LWJhZGdlLXBvc2l0aW9uIC0tPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICBtYXRCYWRnZT1cIjhcIiBtYXRCYWRnZVBvc2l0aW9uPVwiYmVmb3JlXCIgbWF0QmFkZ2VDb2xvcj1cImFjY2VudFwiPlxuICAgIEFjdGlvblxuICA8L2J1dHRvbj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtYmFkZ2UtcG9zaXRpb24gLS0+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImRlbW8tc2VjdGlvblwiPlxuICAgIEJ1dHRvbiB0b2dnbGVzIGJhZGdlIHZpc2liaWxpdHlcbjwhLS0gI2RvY3JlZ2lvbiBtYXQtYmFkZ2UtaGlkZSAtLT5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIG1hdEJhZGdlPVwiN1wiIFttYXRCYWRnZUhpZGRlbl09XCJoaWRkZW5cIiAoY2xpY2spPVwidG9nZ2xlQmFkZ2VWaXNpYmlsaXR5KClcIj5cbiAgICAgICAgSGlkZVxuICAgIDwvYnV0dG9uPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1iYWRnZS1oaWRlIC0tPlxuICA8L2Rpdj5cblxuPGRpdiBjbGFzcz1cImRlbW8tc2VjdGlvblwiPlxuICBJY29uIHdpdGggYSBiYWRnZVxuPCEtLSAjZG9jcmVnaW9uIG1hdC1iYWRnZS1jb2xvciAtLT5cbiAgPG1hdC1pY29uIG1hdEJhZGdlPVwiMTVcIiBtYXRCYWRnZUNvbG9yPVwid2FyblwiPmhvbWU8L21hdC1pY29uPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1iYWRnZS1jb2xvciAtLT5cbiAgICA8IS0tIEluY2x1ZGUgdGV4dCBkZXNjcmlwdGlvbiBvZiB0aGUgaWNvbidzIG1lYW5pbmcgZm9yIHNjcmVlbi1yZWFkZXJzIC0tPlxuICAgIDxzcGFuIGNsYXNzPVwiY2RrLXZpc3VhbGx5LWhpZGRlblwiPlxuICAgICAgRXhhbXBsZSB3aXRoIGEgaG9tZSBpY29uIHdpdGggb3ZlcmxhaWQgYmFkZ2Ugc2hvd2luZyB0aGUgbnVtYmVyIDE1XG4gICAgPC9zcGFuPlxuPC9kaXY+XG4iXX0=