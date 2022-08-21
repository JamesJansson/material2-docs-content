import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/legacy-tabs";
/**
 * @title Tab group with the headers on the bottom
 */
export class TabGroupHeaderBelowExample {
}
TabGroupHeaderBelowExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: TabGroupHeaderBelowExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabGroupHeaderBelowExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: TabGroupHeaderBelowExample, selector: "tab-group-header-below-example", ngImport: i0, template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "component", type: i1.MatLegacyTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple"], exportAs: ["matTabGroup"] }, { kind: "component", type: i1.MatLegacyTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: TabGroupHeaderBelowExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-header-below-example', template: "<mat-tab-group headerPosition=\"below\">\n  <mat-tab label=\"First\"> Content 1 </mat-tab>\n  <mat-tab label=\"Second\"> Content 2 </mat-tab>\n  <mat-tab label=\"Third\"> Content 3 </mat-tab>\n</mat-tab-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWhlYWRlci1iZWxvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtaGVhZGVyLWJlbG93L3RhYi1ncm91cC1oZWFkZXItYmVsb3ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWhlYWRlci1iZWxvdy90YWItZ3JvdXAtaGVhZGVyLWJlbG93LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sMEJBQTBCOzs0SEFBMUIsMEJBQTBCO2dIQUExQiwwQkFBMEIsc0VDVHZDLHFOQUtBO2dHRElhLDBCQUEwQjtrQkFKdEMsU0FBUzsrQkFDRSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIHRoZSBoZWFkZXJzIG9uIHRoZSBib3R0b21cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWhlYWRlci1iZWxvdy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtaGVhZGVyLWJlbG93LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwSGVhZGVyQmVsb3dFeGFtcGxlIHt9XG4iLCI8bWF0LXRhYi1ncm91cCBoZWFkZXJQb3NpdGlvbj1cImJlbG93XCI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj4gQ29udGVudCAxIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj4gQ29udGVudCAyIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPiBDb250ZW50IDMgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19