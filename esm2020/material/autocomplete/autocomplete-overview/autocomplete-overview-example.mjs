import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/autocomplete";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/slide-toggle";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/common";
/**
 * @title Autocomplete overview
 */
export class AutocompleteOverviewExample {
    constructor() {
        this.stateCtrl = new FormControl();
        this.states = [
            {
                name: 'Arkansas',
                population: '2.978M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
            },
            {
                name: 'California',
                population: '39.14M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
            },
            {
                name: 'Florida',
                population: '20.27M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
            },
            {
                name: 'Texas',
                population: '27.47M',
                // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
                flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
            },
        ];
        this.filteredStates = this.stateCtrl.valueChanges.pipe(startWith(''), map(state => (state ? this._filterStates(state) : this.states.slice())));
    }
    _filterStates(value) {
        const filterValue = value.toLowerCase();
        return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
    }
}
AutocompleteOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: AutocompleteOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
AutocompleteOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-rc.1", type: AutocompleteOverviewExample, selector: "autocomplete-overview-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>State</mat-label>\n    <input matInput\n           aria-label=\"State\"\n           [matAutocomplete]=\"auto\"\n           [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n        <span>{{state.name}}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i4.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["disabled", "disableRipple", "color", "tabIndex", "name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "checked"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }], directives: [{ type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i5.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i1.MatLabel, selector: "mat-label" }, { type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], pipes: { "async": i7.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: AutocompleteOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-overview-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>State</mat-label>\n    <input matInput\n           aria-label=\"State\"\n           [matAutocomplete]=\"auto\"\n           [formControl]=\"stateCtrl\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let state of filteredStates | async\" [value]=\"state.name\">\n        <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\">\n        <span>{{state.name}}</span> |\n        <small>Population: {{state.population}}</small>\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n\n  <br>\n\n  <mat-slide-toggle\n    [checked]=\"stateCtrl.disabled\"\n    (change)=\"stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()\">\n    Disable Input?\n  </mat-slide-toggle>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir='rtl'] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3L2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1vdmVydmlldy9hdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztBQVE5Qzs7R0FFRztBQU1ILE1BQU0sT0FBTywyQkFBMkI7SUErQnRDO1FBOUJBLGNBQVMsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRzlCLFdBQU0sR0FBWTtZQUNoQjtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLCtEQUErRDtnQkFDL0QsSUFBSSxFQUFFLDBFQUEwRTthQUNqRjtZQUNEO2dCQUNFLElBQUksRUFBRSxZQUFZO2dCQUNsQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsaUVBQWlFO2dCQUNqRSxJQUFJLEVBQUUsNEVBQTRFO2FBQ25GO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLDhEQUE4RDtnQkFDOUQsSUFBSSxFQUFFLHlFQUF5RTthQUNoRjtZQUNEO2dCQUNFLElBQUksRUFBRSxPQUFPO2dCQUNiLFVBQVUsRUFBRSxRQUFRO2dCQUNwQiw0REFBNEQ7Z0JBQzVELElBQUksRUFBRSx1RUFBdUU7YUFDOUU7U0FDRixDQUFDO1FBR0EsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ3BELFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQ3hFLENBQUM7SUFDSixDQUFDO0lBRU8sYUFBYSxDQUFDLEtBQWE7UUFDakMsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXhDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7OzZIQTFDVSwyQkFBMkI7aUhBQTNCLDJCQUEyQixxRUNuQnhDLG8yQkF3QkE7Z0dETGEsMkJBQTJCO2tCQUx2QyxTQUFTOytCQUNFLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge21hcCwgc3RhcnRXaXRofSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBmbGFnOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9wdWxhdGlvbjogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBBdXRvY29tcGxldGUgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2F1dG9jb21wbGV0ZS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZU92ZXJ2aWV3RXhhbXBsZSB7XG4gIHN0YXRlQ3RybCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICBmaWx0ZXJlZFN0YXRlczogT2JzZXJ2YWJsZTxTdGF0ZVtdPjtcblxuICBzdGF0ZXM6IFN0YXRlW10gPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0Fya2Fuc2FzJyxcbiAgICAgIHBvcHVsYXRpb246ICcyLjk3OE0nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfQXJrYW5zYXMuc3ZnXG4gICAgICBmbGFnOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy85LzlkL0ZsYWdfb2ZfQXJrYW5zYXMuc3ZnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDYWxpZm9ybmlhJyxcbiAgICAgIHBvcHVsYXRpb246ICczOS4xNE0nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfQ2FsaWZvcm5pYS5zdmdcbiAgICAgIGZsYWc6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zLzAvMDEvRmxhZ19vZl9DYWxpZm9ybmlhLnN2ZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnRmxvcmlkYScsXG4gICAgICBwb3B1bGF0aW9uOiAnMjAuMjdNJyxcbiAgICAgIC8vIGh0dHBzOi8vY29tbW9ucy53aWtpbWVkaWEub3JnL3dpa2kvRmlsZTpGbGFnX29mX0Zsb3JpZGEuc3ZnXG4gICAgICBmbGFnOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9mL2Y3L0ZsYWdfb2ZfRmxvcmlkYS5zdmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1RleGFzJyxcbiAgICAgIHBvcHVsYXRpb246ICcyNy40N00nLFxuICAgICAgLy8gaHR0cHM6Ly9jb21tb25zLndpa2ltZWRpYS5vcmcvd2lraS9GaWxlOkZsYWdfb2ZfVGV4YXMuc3ZnXG4gICAgICBmbGFnOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9mL2Y3L0ZsYWdfb2ZfVGV4YXMuc3ZnJyxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZmlsdGVyZWRTdGF0ZXMgPSB0aGlzLnN0YXRlQ3RybC52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIHN0YXJ0V2l0aCgnJyksXG4gICAgICBtYXAoc3RhdGUgPT4gKHN0YXRlID8gdGhpcy5fZmlsdGVyU3RhdGVzKHN0YXRlKSA6IHRoaXMuc3RhdGVzLnNsaWNlKCkpKSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfZmlsdGVyU3RhdGVzKHZhbHVlOiBzdHJpbmcpOiBTdGF0ZVtdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZXMuZmlsdGVyKHN0YXRlID0+IHN0YXRlLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+U3RhdGU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXRcbiAgICAgICAgICAgYXJpYS1sYWJlbD1cIlN0YXRlXCJcbiAgICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cInN0YXRlQ3RybFwiPlxuICAgIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgc3RhdGUgb2YgZmlsdGVyZWRTdGF0ZXMgfCBhc3luY1wiIFt2YWx1ZV09XCJzdGF0ZS5uYW1lXCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJleGFtcGxlLW9wdGlvbi1pbWdcIiBhcmlhLWhpZGRlbiBbc3JjXT1cInN0YXRlLmZsYWdcIiBoZWlnaHQ9XCIyNVwiPlxuICAgICAgICA8c3Bhbj57e3N0YXRlLm5hbWV9fTwvc3Bhbj4gfFxuICAgICAgICA8c21hbGw+UG9wdWxhdGlvbjoge3tzdGF0ZS5wb3B1bGF0aW9ufX08L3NtYWxsPlxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LWF1dG9jb21wbGV0ZT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8YnI+XG5cbiAgPG1hdC1zbGlkZS10b2dnbGVcbiAgICBbY2hlY2tlZF09XCJzdGF0ZUN0cmwuZGlzYWJsZWRcIlxuICAgIChjaGFuZ2UpPVwic3RhdGVDdHJsLmRpc2FibGVkID8gc3RhdGVDdHJsLmVuYWJsZSgpIDogc3RhdGVDdHJsLmRpc2FibGUoKVwiPlxuICAgIERpc2FibGUgSW5wdXQ/XG4gIDwvbWF0LXNsaWRlLXRvZ2dsZT5cbjwvZm9ybT5cbiJdfQ==