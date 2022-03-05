import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/** @title Basic drawer */
export class SidenavDrawerOverviewExample {
}
SidenavDrawerOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: SidenavDrawerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SidenavDrawerOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "14.0.0-next.5", type: SidenavDrawerOverviewExample, selector: "sidenav-drawer-overview-example", ngImport: i0, template: "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>Drawer content</mat-drawer>\n  <mat-drawer-content>Main content</mat-drawer-content>\n</mat-drawer-container>\n", styles: [".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}\n"], components: [{ type: i1.MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }, { type: i1.MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { type: i1.MatDrawerContent, selector: "mat-drawer-content" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.5", ngImport: i0, type: SidenavDrawerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-drawer-overview-example', template: "<mat-drawer-container class=\"example-container\">\n  <mat-drawer mode=\"side\" opened>Drawer content</mat-drawer>\n  <mat-drawer-content>Main content</mat-drawer-content>\n</mat-drawer-container>\n", styles: [".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXcvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXcvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4QywwQkFBMEI7QUFNMUIsTUFBTSxPQUFPLDRCQUE0Qjs7Z0lBQTVCLDRCQUE0QjtvSEFBNUIsNEJBQTRCLHVFQ1J6Qyx3TUFJQTtrR0RJYSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0UsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEJhc2ljIGRyYXdlciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtZHJhd2VyLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZEcmF3ZXJPdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtZHJhd2VyLWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxtYXQtZHJhd2VyIG1vZGU9XCJzaWRlXCIgb3BlbmVkPkRyYXdlciBjb250ZW50PC9tYXQtZHJhd2VyPlxuICA8bWF0LWRyYXdlci1jb250ZW50Pk1haW4gY29udGVudDwvbWF0LWRyYXdlci1jb250ZW50PlxuPC9tYXQtZHJhd2VyLWNvbnRhaW5lcj5cbiJdfQ==