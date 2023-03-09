import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
import * as i2 from "@angular/material/icon";
/**
 * @title Testing with MatChipsHarness
 */
class ChipsHarnessExample {
    constructor() {
        this.isDisabled = false;
        this.remove = jasmine.createSpy('remove spy');
        this.add = jasmine.createSpy('add spy');
    }
}
ChipsHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: ChipsHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.2", type: ChipsHarnessExample, selector: "chips-harness-example", ngImport: i0, template: "<mat-chip-listbox\n    [disabled]=\"isDisabled\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\">\n    Chip 2\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\n  </mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\n</mat-chip-listbox>", dependencies: [{ kind: "directive", type: i1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "component", type: i1.MatChipOption, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "selectable", "selected"], outputs: ["selectionChange"] }, { kind: "directive", type: i1.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
export { ChipsHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: ChipsHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-harness-example', template: "<mat-chip-listbox\n    [disabled]=\"isDisabled\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip-option (removed)=\"remove()\">Chip 1</mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\">\n    Chip 2\n    <button matChipRemove aria-label=\"remove Chip 2\"><mat-icon>remove_icon</mat-icon></button>\n  </mat-chip-option>\n  <mat-chip-option (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip-option>\n</mat-chip-listbox>" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtaGFybmVzcy9jaGlwcy1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1oYXJuZXNzL2NoaXBzLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFDSCxNQUlhLG1CQUFtQjtJQUpoQztRQUtFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsV0FBTSxHQUFlLE9BQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDckQsUUFBRyxHQUFlLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDaEQ7O3VIQUpZLG1CQUFtQjsyR0FBbkIsbUJBQW1CLDZEQ1RoQyw2Y0FTbUI7U0RBTixtQkFBbUI7a0dBQW5CLG1CQUFtQjtrQkFKL0IsU0FBUzsrQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRDaGlwc0hhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzSGFybmVzc0V4YW1wbGUge1xuICBpc0Rpc2FibGVkID0gZmFsc2U7XG4gIHJlbW92ZTogKCkgPT4gdm9pZCA9IGphc21pbmUuY3JlYXRlU3B5KCdyZW1vdmUgc3B5Jyk7XG4gIGFkZDogKCkgPT4gdm9pZCA9IGphc21pbmUuY3JlYXRlU3B5KCdhZGQgc3B5Jyk7XG59XG4iLCI8bWF0LWNoaXAtbGlzdGJveFxuICAgIFtkaXNhYmxlZF09XCJpc0Rpc2FibGVkXCJcbiAgICBbYXJpYS1vcmllbnRhdGlvbl09XCInaG9yaXpvbnRhbCdcIj5cbiAgPG1hdC1jaGlwLW9wdGlvbiAocmVtb3ZlZCk9XCJyZW1vdmUoKVwiPkNoaXAgMTwvbWF0LWNoaXAtb3B0aW9uPlxuICA8bWF0LWNoaXAtb3B0aW9uIChyZW1vdmVkKT1cInJlbW92ZSgpXCI+XG4gICAgQ2hpcCAyXG4gICAgPGJ1dHRvbiBtYXRDaGlwUmVtb3ZlIGFyaWEtbGFiZWw9XCJyZW1vdmUgQ2hpcCAyXCI+PG1hdC1pY29uPnJlbW92ZV9pY29uPC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgPC9tYXQtY2hpcC1vcHRpb24+XG4gIDxtYXQtY2hpcC1vcHRpb24gKHJlbW92ZWQpPVwicmVtb3ZlKClcIj48bWF0LWNoaXAtYXZhdGFyPkM8L21hdC1jaGlwLWF2YXRhcj5DaGlwIDQ8L21hdC1jaGlwLW9wdGlvbj5cbjwvbWF0LWNoaXAtbGlzdGJveD4iXX0=