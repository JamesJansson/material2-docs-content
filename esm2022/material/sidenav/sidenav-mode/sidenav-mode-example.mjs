import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/radio";
import * as i4 from "@angular/forms";
/** @title Sidenav with configurable mode */
class SidenavModeExample {
    constructor() {
        this.mode = new FormControl('over');
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SidenavModeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: SidenavModeExample, isStandalone: true, selector: "sidenav-mode-example", ngImport: i0, template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav [mode]=\"mode.value || 'over'\">\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i1.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i1.MatSidenavContent, selector: "mat-sidenav-content" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
export { SidenavModeExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SidenavModeExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-mode-example', standalone: true, imports: [
                        NgIf,
                        MatSidenavModule,
                        MatButtonModule,
                        MatRadioModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ], template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav [mode]=\"mode.value || 'over'\">\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n    <p>\n      <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n        <label>Mode:</label>\n        <mat-radio-button value=\"over\">Over</mat-radio-button>\n        <mat-radio-button value=\"side\">Side</mat-radio-button>\n        <mat-radio-button value=\"push\">Push</mat-radio-button>\n      </mat-radio-group>\n    </p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1tb2RlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtbW9kZS9zaWRlbmF2LW1vZGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1tb2RlL3NpZGVuYXYtbW9kZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDckMsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQWdCLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDMUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBRXpELDRDQUE0QztBQUM1QyxNQWNhLGtCQUFrQjtJQWQvQjtRQWVFLFNBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUF1QixDQUFDLENBQUM7UUFDaEQsY0FBUyxHQUFHLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25GOzhHQUhZLGtCQUFrQjtrR0FBbEIsa0JBQWtCLGdGQ3RCL0IsdW9DQTJCQSwwUURiSSxJQUFJLDRGQUNKLGdCQUFnQiwwWUFDaEIsZUFBZSwyUUFDZixjQUFjLDBSQUNkLFdBQVcsc0lBQ1gsbUJBQW1COztTQUdWLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQWQ5QixTQUFTOytCQUNFLHNCQUFzQixjQUdwQixJQUFJLFdBQ1A7d0JBQ1AsSUFBSTt3QkFDSixnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXREcmF3ZXJNb2RlLCBNYXRTaWRlbmF2TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG4vKiogQHRpdGxlIFNpZGVuYXYgd2l0aCBjb25maWd1cmFibGUgbW9kZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1tb2RlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtbW9kZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1tb2RlLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBOZ0lmLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZNb2RlRXhhbXBsZSB7XG4gIG1vZGUgPSBuZXcgRm9ybUNvbnRyb2woJ292ZXInIGFzIE1hdERyYXdlck1vZGUpO1xuICBzaG91bGRSdW4gPSAvKF58Likoc3RhY2tibGl0enx3ZWJjb250YWluZXIpLihpb3xjb20pJC8udGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCk7XG59XG4iLCI8bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiAqbmdJZj1cInNob3VsZFJ1blwiPlxuICA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgW21vZGVdPVwibW9kZS52YWx1ZSB8fCAnb3ZlcidcIj5cbiAgICA8cD48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNpZGVuYXYudG9nZ2xlKClcIj5Ub2dnbGU8L2J1dHRvbj48L3A+XG4gICAgPHA+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiIFtmb3JtQ29udHJvbF09XCJtb2RlXCI+XG4gICAgICAgIDxsYWJlbD5Nb2RlOjwvbGFiZWw+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwib3ZlclwiPk92ZXI8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwic2lkZVwiPlNpZGU8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwicHVzaFwiPlB1c2g8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L3A+XG4gIDwvbWF0LXNpZGVuYXY+XG5cbiAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzaWRlbmF2LnRvZ2dsZSgpXCI+VG9nZ2xlPC9idXR0b24+PC9wPlxuICAgIDxwPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbZm9ybUNvbnRyb2xdPVwibW9kZVwiPlxuICAgICAgICA8bGFiZWw+TW9kZTo8L2xhYmVsPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIm92ZXJcIj5PdmVyPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInNpZGVcIj5TaWRlPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInB1c2hcIj5QdXNoPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9wPlxuICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cblxuPGRpdiAqbmdJZj1cIiFzaG91bGRSdW5cIj5QbGVhc2Ugb3BlbiBvbiBTdGFja2JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cbiJdfQ==