import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { map, startWith } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/chips";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/autocomplete";
import * as i6 from "@angular/material/core";
/**
 * @title Chips Autocomplete
 */
export class ChipsAutocompleteExample {
    constructor() {
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruitCtrl = new FormControl('');
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.announcer = inject(LiveAnnouncer);
        this.filteredFruits = this.fruitCtrl.valueChanges.pipe(startWith(null), map((fruit) => (fruit ? this._filter(fruit) : this.allFruits.slice())));
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.push(value);
        }
        // Clear the input value
        event.chipInput.clear();
        this.fruitCtrl.setValue(null);
    }
    remove(fruit) {
        const index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
            this.announcer.announce(`Removed ${fruit}`);
        }
    }
    selected(event) {
        this.fruits.push(event.option.viewValue);
        this.fruitInput.nativeElement.value = '';
        this.fruitCtrl.setValue(null);
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ChipsAutocompleteExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: ChipsAutocompleteExample, isStandalone: true, selector: "chips-autocomplete-example", viewQueries: [{ propertyName: "fruitInput", first: true, predicate: ["fruitInput"], descendants: true }], ngImport: i0, template: "<form>\n  <mat-form-field class=\"example-chip-list\">\n    <mat-label>Favorite Fruits</mat-label>\n    <mat-chip-grid #chipGrid aria-label=\"Fruit selection\">\n      <mat-chip-row *ngFor=\"let fruit of fruits\" (removed)=\"remove(fruit)\">\n        {{fruit}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    </mat-chip-grid>\n    <input placeholder=\"New Fruit...\" #fruitInput [formControl]=\"fruitCtrl\"\n      [matChipInputFor]=\"chipGrid\" [matAutocomplete]=\"auto\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      (matChipInputTokenEnd)=\"add($event)\"/>\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n      <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n        {{fruit}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i3.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i3.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i3.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i3.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i5.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple", "hideSingleSelectionIndicator"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i5.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: ChipsAutocompleteExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-autocomplete-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatChipsModule,
                        NgFor,
                        MatIconModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                        AsyncPipe,
                    ], template: "<form>\n  <mat-form-field class=\"example-chip-list\">\n    <mat-label>Favorite Fruits</mat-label>\n    <mat-chip-grid #chipGrid aria-label=\"Fruit selection\">\n      <mat-chip-row *ngFor=\"let fruit of fruits\" (removed)=\"remove(fruit)\">\n        {{fruit}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    </mat-chip-grid>\n    <input placeholder=\"New Fruit...\" #fruitInput [formControl]=\"fruitCtrl\"\n      [matChipInputFor]=\"chipGrid\" [matAutocomplete]=\"auto\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      (matChipInputTokenEnd)=\"add($event)\"/>\n    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n      <mat-option *ngFor=\"let fruit of filteredFruits | async\" [value]=\"fruit\">\n        {{fruit}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { fruitInput: [{
                type: ViewChild,
                args: ['fruitInput']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3RSxPQUFPLEVBQStCLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkcsT0FBTyxFQUFvQixjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUUxRSxPQUFPLEVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7QUFFaEQ7O0dBRUc7QUFpQkgsTUFBTSxPQUFPLHdCQUF3QjtJQVduQztRQVZB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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NPTU1BLCBFTlRFUn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRBdXRvY29tcGxldGVTZWxlY3RlZEV2ZW50LCBNYXRBdXRvY29tcGxldGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQge01hdENoaXBJbnB1dEV2ZW50LCBNYXRDaGlwc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBzdGFydFdpdGh9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge05nRm9yLCBBc3luY1BpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge0xpdmVBbm5vdW5jZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgQXV0b2NvbXBsZXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWF1dG9jb21wbGV0ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1hdXRvY29tcGxldGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLWF1dG9jb21wbGV0ZS1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE5nRm9yLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgQXN5bmNQaXBlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0F1dG9jb21wbGV0ZUV4YW1wbGUge1xuICBzZXBhcmF0b3JLZXlzQ29kZXM6IG51bWJlcltdID0gW0VOVEVSLCBDT01NQV07XG4gIGZydWl0Q3RybCA9IG5ldyBGb3JtQ29udHJvbCgnJyk7XG4gIGZpbHRlcmVkRnJ1aXRzOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcbiAgZnJ1aXRzOiBzdHJpbmdbXSA9IFsnTGVtb24nXTtcbiAgYWxsRnJ1aXRzOiBzdHJpbmdbXSA9IFsnQXBwbGUnLCAnTGVtb24nLCAnTGltZScsICdPcmFuZ2UnLCAnU3RyYXdiZXJyeSddO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZydWl0SW5wdXQnKSBmcnVpdElucHV0OiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xuXG4gIGFubm91bmNlciA9IGluamVjdChMaXZlQW5ub3VuY2VyKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZpbHRlcmVkRnJ1aXRzID0gdGhpcy5mcnVpdEN0cmwudmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICBtYXAoKGZydWl0OiBzdHJpbmcgfCBudWxsKSA9PiAoZnJ1aXQgPyB0aGlzLl9maWx0ZXIoZnJ1aXQpIDogdGhpcy5hbGxGcnVpdHMuc2xpY2UoKSkpLFxuICAgICk7XG4gIH1cblxuICBhZGQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudmFsdWUgfHwgJycpLnRyaW0oKTtcblxuICAgIC8vIEFkZCBvdXIgZnJ1aXRcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuZnJ1aXRzLnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIC8vIENsZWFyIHRoZSBpbnB1dCB2YWx1ZVxuICAgIGV2ZW50LmNoaXBJbnB1dCEuY2xlYXIoKTtcblxuICAgIHRoaXMuZnJ1aXRDdHJsLnNldFZhbHVlKG51bGwpO1xuICB9XG5cbiAgcmVtb3ZlKGZydWl0OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZnJ1aXRzLmluZGV4T2YoZnJ1aXQpO1xuXG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuZnJ1aXRzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgIHRoaXMuYW5ub3VuY2VyLmFubm91bmNlKGBSZW1vdmVkICR7ZnJ1aXR9YCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0ZWQoZXZlbnQ6IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmZydWl0cy5wdXNoKGV2ZW50Lm9wdGlvbi52aWV3VmFsdWUpO1xuICAgIHRoaXMuZnJ1aXRJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgdGhpcy5mcnVpdEN0cmwuc2V0VmFsdWUobnVsbCk7XG4gIH1cblxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5hbGxGcnVpdHMuZmlsdGVyKGZydWl0ID0+IGZydWl0LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbiAgfVxufVxuIiwiPGZvcm0+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtY2hpcC1saXN0XCI+XG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBGcnVpdHM8L21hdC1sYWJlbD5cbiAgICA8bWF0LWNoaXAtZ3JpZCAjY2hpcEdyaWQgYXJpYS1sYWJlbD1cIkZydWl0IHNlbGVjdGlvblwiPlxuICAgICAgPG1hdC1jaGlwLXJvdyAqbmdGb3I9XCJsZXQgZnJ1aXQgb2YgZnJ1aXRzXCIgKHJlbW92ZWQpPVwicmVtb3ZlKGZydWl0KVwiPlxuICAgICAgICB7e2ZydWl0fX1cbiAgICAgICAgPGJ1dHRvbiBtYXRDaGlwUmVtb3ZlIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3JlbW92ZSAnICsgZnJ1aXRcIj5cbiAgICAgICAgICA8bWF0LWljb24+Y2FuY2VsPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L21hdC1jaGlwLXJvdz5cbiAgICA8L21hdC1jaGlwLWdyaWQ+XG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTmV3IEZydWl0Li4uXCIgI2ZydWl0SW5wdXQgW2Zvcm1Db250cm9sXT1cImZydWl0Q3RybFwiXG4gICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBHcmlkXCIgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgIFttYXRDaGlwSW5wdXRTZXBhcmF0b3JLZXlDb2Rlc109XCJzZXBhcmF0b3JLZXlzQ29kZXNcIlxuICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZCgkZXZlbnQpXCIvPlxuICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCIgKG9wdGlvblNlbGVjdGVkKT1cInNlbGVjdGVkKCRldmVudClcIj5cbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBmcnVpdCBvZiBmaWx0ZXJlZEZydWl0cyB8IGFzeW5jXCIgW3ZhbHVlXT1cImZydWl0XCI+XG4gICAgICAgIHt7ZnJ1aXR9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==