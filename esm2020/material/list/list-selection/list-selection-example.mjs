import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/legacy-list";
/**
 * @title List with selection
 */
export class ListSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSelectionExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ListSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListSelectionExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: ListSelectionExample, selector: "list-selection-example", ngImport: i0, template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n", styles: ["/** No styles for this example. */\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatLegacySelectionList, selector: "mat-selection-list", inputs: ["disableRipple", "color", "compareWith", "disabled", "multiple"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i2.MatLegacyListOption, selector: "mat-list-option", inputs: ["disableRipple", "checkboxPosition", "color", "value", "disabled", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ListSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-selection-example', template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n", styles: ["/** No styles for this example. */\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBTUUsaUJBQVksR0FBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNqRjs7c0hBRlksb0JBQW9COzBHQUFwQixvQkFBb0IsOERDVmpDLCtOQVNBO2dHRENhLG9CQUFvQjtrQkFMaEMsU0FBUzsrQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIExpc3Qgd2l0aCBzZWxlY3Rpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1zZWxlY3Rpb24tZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydsaXN0LXNlbGVjdGlvbi1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtc2VsZWN0aW9uLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RTZWxlY3Rpb25FeGFtcGxlIHtcbiAgdHlwZXNPZlNob2VzOiBzdHJpbmdbXSA9IFsnQm9vdHMnLCAnQ2xvZ3MnLCAnTG9hZmVycycsICdNb2NjYXNpbnMnLCAnU25lYWtlcnMnXTtcbn1cbiIsIjxtYXQtc2VsZWN0aW9uLWxpc3QgI3Nob2VzPlxuICA8bWF0LWxpc3Qtb3B0aW9uICpuZ0Zvcj1cImxldCBzaG9lIG9mIHR5cGVzT2ZTaG9lc1wiPlxuICAgIHt7c2hvZX19XG4gIDwvbWF0LWxpc3Qtb3B0aW9uPlxuPC9tYXQtc2VsZWN0aW9uLWxpc3Q+XG5cbjxwPlxuICBPcHRpb25zIHNlbGVjdGVkOiB7e3Nob2VzLnNlbGVjdGVkT3B0aW9ucy5zZWxlY3RlZC5sZW5ndGh9fVxuPC9wPlxuIl19