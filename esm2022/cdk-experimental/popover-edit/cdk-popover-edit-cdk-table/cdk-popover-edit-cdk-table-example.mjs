import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { CdkTableModule } from '@angular/cdk/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
import * as i2 from "@angular/cdk-experimental/popover-edit";
import * as i3 from "@angular/forms";
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
/**
 * @title CDK Popover Edit on a CDK data-table
 */
export class CdkPopoverEditCdkTableExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
    }
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: CdkPopoverEditCdkTableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: CdkPopoverEditCdkTableExample, isStandalone: true, selector: "cdk-popover-edit-cdk-table-example", ngImport: i0, template: "<table class=\"example-table\" cdk-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white;\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert cdkEditClose>Revert and close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white;\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 25%;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTableModule }, { kind: "component", type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { kind: "directive", type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }, { kind: "directive", type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { kind: "directive", type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { kind: "directive", type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["sticky", "cdkColumnDef", "stickyEnd"] }, { kind: "directive", type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { kind: "component", type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }, { kind: "directive", type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { kind: "component", type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { kind: "directive", type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }, { kind: "ngmodule", type: CdkPopoverEditModule }, { kind: "directive", type: i2.CdkPopoverEdit, selector: "[cdkPopoverEdit]:not([cdkPopoverEditTabOut])", inputs: ["cdkPopoverEdit", "cdkPopoverEditContext", "cdkPopoverEditColspan", "cdkPopoverEditDisabled"] }, { kind: "directive", type: i2.CdkRowHoverContent, selector: "[cdkRowHoverContent]" }, { kind: "directive", type: i2.CdkEditControl, selector: "form[cdkEditControl]", inputs: ["cdkEditControlClickOutBehavior", "cdkEditControlPreservedFormValue", "cdkEditControlIgnoreSubmitUnlessValid"], outputs: ["cdkEditControlPreservedFormValueChange"] }, { kind: "directive", type: i2.CdkEditRevert, selector: "button[cdkEditRevert]", inputs: ["type"] }, { kind: "directive", type: i2.CdkEditClose, selector: "[cdkEditClose]" }, { kind: "directive", type: i2.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "directive", type: i2.CdkEditOpen, selector: "[cdkEditOpen]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: CdkPopoverEditCdkTableExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-popover-edit-cdk-table-example', standalone: true, imports: [CdkTableModule, CdkPopoverEditModule, FormsModule], template: "<table class=\"example-table\" cdk-table editable [dataSource]=\"dataSource\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #weightEdit let-element>\n    <div style=\"background-color: white;\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmitWeight(element, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedWeightValues.get(element)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedWeightValues.set(element, $event)\">\n        Edit b:\n        <input type=\"number\" [ngModel]=\"element.weight\" name=\"weight\" required>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert cdkEditClose>Revert and close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container cdkColumnDef=\"position\">\n    <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container cdkColumnDef=\"name\">\n    <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"nameEdit\">\n      {{element.name}}\n      \n      <!-- This edit is defined in the cell and can implicitly access element -->\n      <ng-template #nameEdit>\n        <div style=\"background-color: white;\">\n          <form #f=\"ngForm\"\n              cdkEditControl\n              (ngSubmit)=\"onSubmitName(element, f)\"\n              [cdkEditControlPreservedFormValue]=\"preservedNameValues.get(element)\"\n              (cdkEditControlPreservedFormValueChange)=\"preservedNameValues.set(element, $event)\">\n            Edit a:\n            <input [ngModel]=\"element.name\" name=\"name\" required>\n            <br>\n            <button type=\"submit\">Confirm</button>\n            <button cdkEditRevert>Revert</button>\n            <button cdkEditClose>Close</button>\n          </form>\n        </div>\n      </ng-template>\n\n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container cdkColumnDef=\"weight\">\n    <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n    <td cdk-cell *cdkCellDef=\"let element\"\n        [cdkPopoverEdit]=\"weightEdit\" [cdkPopoverEditContext]=\"element\">\n      {{element.weight}}\n      \n      <span *cdkRowHoverContent>\n        <button cdkEditOpen>Edit</button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container cdkColumnDef=\"symbol\">\n    <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n    <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n  <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  width: 25%;\n}\n"] }]
        }] });
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFTLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7OztBQVNsRCxNQUFNLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDL0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDaEUsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM5RCxDQUFDO0FBRUY7O0dBRUc7QUFRSCxNQUFNLE9BQU8sNkJBQTZCO0lBUDFDO1FBUUUscUJBQWdCLEdBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxlQUFVLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBRTVCLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO1FBQzFELDBCQUFxQixHQUFHLElBQUksT0FBTyxFQUF3QixDQUFDO0tBaUJ0RTtJQWZDLFlBQVksQ0FBQyxPQUF3QixFQUFFLENBQVM7UUFDOUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDWixPQUFPO1NBQ1I7UUFFRCxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxjQUFjLENBQUMsT0FBd0IsRUFBRSxDQUFTO1FBQ2hELElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFO1lBQ1osT0FBTztTQUNSO1FBRUQsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNsQyxDQUFDOzhHQXJCVSw2QkFBNkI7a0dBQTdCLDZCQUE2Qiw4RkMvQzFDLG8rRkFnRkEsME1EbkNZLGNBQWMsbWxDQUFFLG9CQUFvQixnN0JBQUUsV0FBVzs7MkZBRWhELDZCQUE2QjtrQkFQekMsU0FBUzsrQkFDRSxvQ0FBb0MsY0FHbEMsSUFBSSxXQUNQLENBQUMsY0FBYyxFQUFFLG9CQUFvQixFQUFFLFdBQVcsQ0FBQzs7QUEwQjlEOzs7Ozs7R0FNRztBQUNILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxVQUEyQjtJQUFsRTs7UUFDRSxvREFBb0Q7UUFDcEQsU0FBSSxHQUFHLElBQUksZUFBZSxDQUFvQixZQUFZLENBQUMsQ0FBQztJQVE5RCxDQUFDO0lBTkMsaUdBQWlHO0lBQ2pHLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELFVBQVUsS0FBSSxDQUFDO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0Zvcm0sIEZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0Nka1BvcG92ZXJFZGl0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XG5pbXBvcnQge0Nka1RhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbiAge3Bvc2l0aW9uOiAxMSwgbmFtZTogJ1NvZGl1bScsIHdlaWdodDogMjIuOTg5Nywgc3ltYm9sOiAnTmEnfSxcbiAge3Bvc2l0aW9uOiAxMiwgbmFtZTogJ01hZ25lc2l1bScsIHdlaWdodDogMjQuMzA1LCBzeW1ib2w6ICdNZyd9LFxuICB7cG9zaXRpb246IDEzLCBuYW1lOiAnQWx1bWludW0nLCB3ZWlnaHQ6IDI2Ljk4MTUsIHN5bWJvbDogJ0FsJ30sXG4gIHtwb3NpdGlvbjogMTQsIG5hbWU6ICdTaWxpY29uJywgd2VpZ2h0OiAyOC4wODU1LCBzeW1ib2w6ICdTaSd9LFxuICB7cG9zaXRpb246IDE1LCBuYW1lOiAnUGhvc3Bob3J1cycsIHdlaWdodDogMzAuOTczOCwgc3ltYm9sOiAnUCd9LFxuICB7cG9zaXRpb246IDE2LCBuYW1lOiAnU3VsZnVyJywgd2VpZ2h0OiAzMi4wNjUsIHN5bWJvbDogJ1MnfSxcbiAge3Bvc2l0aW9uOiAxNywgbmFtZTogJ0NobG9yaW5lJywgd2VpZ2h0OiAzNS40NTMsIHN5bWJvbDogJ0NsJ30sXG4gIHtwb3NpdGlvbjogMTgsIG5hbWU6ICdBcmdvbicsIHdlaWdodDogMzkuOTQ4LCBzeW1ib2w6ICdBcid9LFxuICB7cG9zaXRpb246IDE5LCBuYW1lOiAnUG90YXNzaXVtJywgd2VpZ2h0OiAzOS4wOTgzLCBzeW1ib2w6ICdLJ30sXG4gIHtwb3NpdGlvbjogMjAsIG5hbWU6ICdDYWxjaXVtJywgd2VpZ2h0OiA0MC4wNzgsIHN5bWJvbDogJ0NhJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBDREsgUG9wb3ZlciBFZGl0IG9uIGEgQ0RLIGRhdGEtdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtUYWJsZU1vZHVsZSwgQ2RrUG9wb3ZlckVkaXRNb2R1bGUsIEZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9wb3ZlckVkaXRDZGtUYWJsZUV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcblxuICByZWFkb25seSBwcmVzZXJ2ZWROYW1lVmFsdWVzID0gbmV3IFdlYWtNYXA8UGVyaW9kaWNFbGVtZW50LCBhbnk+KCk7XG4gIHJlYWRvbmx5IHByZXNlcnZlZFdlaWdodFZhbHVlcyA9IG5ldyBXZWFrTWFwPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuXG4gIG9uU3VibWl0TmFtZShlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQubmFtZSA9IGYudmFsdWUubmFtZTtcbiAgfVxuXG4gIG9uU3VibWl0V2VpZ2h0KGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC53ZWlnaHQgPSBmLnZhbHVlLndlaWdodDtcbiAgfVxufVxuXG4vKipcbiAqIERhdGEgc291cmNlIHRvIHByb3ZpZGUgd2hhdCBkYXRhIHNob3VsZCBiZSByZW5kZXJlZCBpbiB0aGUgdGFibGUuIE5vdGUgdGhhdCB0aGUgZGF0YSBzb3VyY2VcbiAqIGNhbiByZXRyaWV2ZSBpdHMgZGF0YSBpbiBhbnkgd2F5LiBJbiB0aGlzIGNhc2UsIHRoZSBkYXRhIHNvdXJjZSBpcyBwcm92aWRlZCBhIHJlZmVyZW5jZVxuICogdG8gYSBjb21tb24gZGF0YSBiYXNlLCBFeGFtcGxlRGF0YWJhc2UuIEl0IGlzIG5vdCB0aGUgZGF0YSBzb3VyY2UncyByZXNwb25zaWJpbGl0eSB0byBtYW5hZ2VcbiAqIHRoZSB1bmRlcmx5aW5nIGRhdGEuIEluc3RlYWQsIGl0IG9ubHkgbmVlZHMgdG8gdGFrZSB0aGUgZGF0YSBhbmQgc2VuZCB0aGUgdGFibGUgZXhhY3RseSB3aGF0XG4gKiBzaG91bGQgYmUgcmVuZGVyZWQuXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGFtcGxlRGF0YVNvdXJjZSBleHRlbmRzIERhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PiB7XG4gIC8qKiBTdHJlYW0gb2YgZGF0YSB0aGF0IGlzIHByb3ZpZGVkIHRvIHRoZSB0YWJsZS4gKi9cbiAgZGF0YSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8UGVyaW9kaWNFbGVtZW50W10+KEVMRU1FTlRfREFUQSk7XG5cbiAgLyoqIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gcmVuZGVyLiAqL1xuICBjb25uZWN0KCk6IE9ic2VydmFibGU8UGVyaW9kaWNFbGVtZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHt9XG59XG4iLCI8dGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCIgY2RrLXRhYmxlIGVkaXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cbiAgPCEtLVxuICAgIFRoaXMgZWRpdCBsZW5zIGlzIHNwZWNpZmllZCBvdXRzaWRlIG9mIHRoZSBjZWxsIGFuZCBtdXN0IGV4cGxpY2l0bHkgZGVjbGFyZVxuICAgIGl0cyBjb250ZXh0LiBJdCBjb3VsZCBiZSByZXVzZWQgaW4gbXVsdGlwbGUgY2VsbHMuXG4gIC0tPlxuICA8bmctdGVtcGxhdGUgI3dlaWdodEVkaXQgbGV0LWVsZW1lbnQ+XG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHdoaXRlO1wiPlxuICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgIGNka0VkaXRDb250cm9sXG4gICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0V2VpZ2h0KGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICBbY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVdPVwicHJlc2VydmVkV2VpZ2h0VmFsdWVzLmdldChlbGVtZW50KVwiXG4gICAgICAgICAgKGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZFdlaWdodFZhbHVlcy5zZXQoZWxlbWVudCwgJGV2ZW50KVwiPlxuICAgICAgICBFZGl0IGI6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgW25nTW9kZWxdPVwiZWxlbWVudC53ZWlnaHRcIiBuYW1lPVwid2VpZ2h0XCIgcmVxdWlyZWQ+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNka0VkaXRSZXZlcnQgY2RrRWRpdENsb3NlPlJldmVydCBhbmQgY2xvc2U8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxuICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IE5hbWUgPC90aD5cbiAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiXG4gICAgICAgIFtjZGtQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiPlxuICAgICAge3tlbGVtZW50Lm5hbWV9fVxuICAgICAgXG4gICAgICA8IS0tIFRoaXMgZWRpdCBpcyBkZWZpbmVkIGluIHRoZSBjZWxsIGFuZCBjYW4gaW1wbGljaXRseSBhY2Nlc3MgZWxlbWVudCAtLT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjbmFtZUVkaXQ+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIj5cbiAgICAgICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgICAgIGNka0VkaXRDb250cm9sXG4gICAgICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdE5hbWUoZWxlbWVudCwgZilcIlxuICAgICAgICAgICAgICBbY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVdPVwicHJlc2VydmVkTmFtZVZhbHVlcy5nZXQoZWxlbWVudClcIlxuICAgICAgICAgICAgICAoY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVDaGFuZ2UpPVwicHJlc2VydmVkTmFtZVZhbHVlcy5zZXQoZWxlbWVudCwgJGV2ZW50KVwiPlxuICAgICAgICAgICAgRWRpdCBhOlxuICAgICAgICAgICAgPGlucHV0IFtuZ01vZGVsXT1cImVsZW1lbnQubmFtZVwiIG5hbWU9XCJuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNka0VkaXRSZXZlcnQ+UmV2ZXJ0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNka0VkaXRDbG9zZT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICA8c3BhbiAqY2RrUm93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIGNka0VkaXRPcGVuPkVkaXQ8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwid2VpZ2h0XCI+XG4gICAgPHRoIGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvdGg+XG4gICAgPHRkIGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbY2RrUG9wb3ZlckVkaXRdPVwid2VpZ2h0RWRpdFwiIFtjZGtQb3BvdmVyRWRpdENvbnRleHRdPVwiZWxlbWVudFwiPlxuICAgICAge3tlbGVtZW50LndlaWdodH19XG4gICAgICBcbiAgICAgIDxzcGFuICpjZGtSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdE9wZW4+RWRpdDwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gU3ltYm9sIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICA8dGggY2RrLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC90aD5cbiAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIGNkay1oZWFkZXItcm93ICpjZGtIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIGNkay1yb3cgKmNka1Jvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=