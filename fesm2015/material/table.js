import * as i2 from '@angular/common';
import { DecimalPipe, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewChild, ContentChildren, ContentChild, Input, NgModule } from '@angular/core';
import * as i2$6 from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import * as i1$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2$4 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i2$2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i2$3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2$1 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i5 from '@angular/material/paginator';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import * as i6 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i4 from '@angular/material/sort';
import { MatSort, MatSortModule } from '@angular/material/sort';
import * as i1 from '@angular/material/table';
import { MatTableDataSource, MatNoDataRow, MatHeaderRowDef, MatRowDef, MatColumnDef, MatTable, MatTableModule } from '@angular/material/table';
import * as i2$5 from '@angular/cdk/drag-drop';
import { moveItemInArray, DragDropModule } from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as i1$2 from '@angular/material/form-field';
import * as i1$3 from '@angular/common/http';
import { merge, of, ReplaySubject } from 'rxjs';
import { startWith, switchMap, catchError, map } from 'rxjs/operators';
import { SelectionModel, DataSource } from '@angular/cdk/collections';
import * as i1$4 from '@angular/cdk/a11y';

function TableFlexBasicExample_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell");
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableFlexBasicExample_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function TableFlexBasicExample_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell");
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableFlexBasicExample_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function TableFlexBasicExample_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell");
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableFlexBasicExample_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function TableFlexBasicExample_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell");
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableFlexBasicExample_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function TableFlexBasicExample_mat_header_row_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-header-row");
} }
function TableFlexBasicExample_mat_row_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-row");
} }
const ELEMENT_DATA$m = [
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
];
/**
 * @title Basic use of `<mat-table>` (uses display flex)
 */
class TableFlexBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$m;
    }
}
TableFlexBasicExample.ɵfac = function TableFlexBasicExample_Factory(t) { return new (t || TableFlexBasicExample)(); };
TableFlexBasicExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableFlexBasicExample, selectors: [["table-flex-basic-example"]], decls: 15, vars: 3, consts: [[1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"]], template: function TableFlexBasicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableFlexBasicExample_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 2);
        i0.ɵɵtemplate(3, TableFlexBasicExample_mat_cell_3_Template, 2, 1, "mat-cell", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableFlexBasicExample_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 2);
        i0.ɵɵtemplate(6, TableFlexBasicExample_mat_cell_6_Template, 2, 1, "mat-cell", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableFlexBasicExample_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 2);
        i0.ɵɵtemplate(9, TableFlexBasicExample_mat_cell_9_Template, 2, 1, "mat-cell", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableFlexBasicExample_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 2);
        i0.ɵɵtemplate(12, TableFlexBasicExample_mat_cell_12_Template, 2, 1, "mat-cell", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, TableFlexBasicExample_mat_header_row_13_Template, 1, 0, "mat-header-row", 7);
        i0.ɵɵtemplate(14, TableFlexBasicExample_mat_row_14_Template, 1, 0, "mat-row", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableFlexBasicExample, [{
        type: Component,
        args: [{
                selector: 'table-flex-basic-example',
                styleUrls: ['table-flex-basic-example.css'],
                templateUrl: 'table-flex-basic-example.html',
            }]
    }], null, null); })();

function TableBasicExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableBasicExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function TableBasicExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableBasicExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function TableBasicExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableBasicExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function TableBasicExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableBasicExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function TableBasicExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 11);
} }
function TableBasicExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
const ELEMENT_DATA$l = [
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
];
/**
 * @title Basic use of `<table mat-table>`
 */
class TableBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$l;
    }
}
TableBasicExample.ɵfac = function TableBasicExample_Factory(t) { return new (t || TableBasicExample)(); };
TableBasicExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableBasicExample, selectors: [["table-basic-example"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableBasicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableBasicExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableBasicExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableBasicExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableBasicExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableBasicExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableBasicExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableBasicExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableBasicExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, TableBasicExample_tr_13_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(14, TableBasicExample_tr_14_Template, 1, 0, "tr", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableBasicExample, [{
        type: Component,
        args: [{
                selector: 'table-basic-example',
                styleUrls: ['table-basic-example.css'],
                templateUrl: 'table-basic-example.html',
            }]
    }], null, null); })();

function TableDynamicColumnsExample_ng_container_7_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r3, " ");
} }
function TableDynamicColumnsExample_ng_container_7_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    const column_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r7[column_r3], " ");
} }
function TableDynamicColumnsExample_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 5);
    i0.ɵɵtemplate(1, TableDynamicColumnsExample_ng_container_7_th_1_Template, 2, 1, "th", 6);
    i0.ɵɵtemplate(2, TableDynamicColumnsExample_ng_container_7_td_2_Template, 2, 1, "td", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    i0.ɵɵproperty("matColumnDef", column_r3);
} }
function TableDynamicColumnsExample_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 10);
} }
function TableDynamicColumnsExample_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 11);
} }
const ELEMENT_DATA$k = [
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
];
/**
 * @title Table dynamically changing the columns displayed
 */
class TableDynamicColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.displayedColumns.slice();
        this.data = ELEMENT_DATA$k;
    }
    addColumn() {
        const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    }
    removeColumn() {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    }
    shuffle() {
        let currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            let temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    }
}
TableDynamicColumnsExample.ɵfac = function TableDynamicColumnsExample_Factory(t) { return new (t || TableDynamicColumnsExample)(); };
TableDynamicColumnsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableDynamicColumnsExample, selectors: [["table-dynamic-columns-example"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableDynamicColumnsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_0_listener() { return ctx.addColumn(); });
        i0.ɵɵtext(1, " Add column ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 0);
        i0.ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_2_listener() { return ctx.removeColumn(); });
        i0.ɵɵtext(3, " Remove column ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 0);
        i0.ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_4_listener() { return ctx.shuffle(); });
        i0.ɵɵtext(5, " Shuffle ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "table", 1);
        i0.ɵɵtemplate(7, TableDynamicColumnsExample_ng_container_7_Template, 3, 1, "ng-container", 2);
        i0.ɵɵtemplate(8, TableDynamicColumnsExample_tr_8_Template, 1, 0, "tr", 3);
        i0.ɵɵtemplate(9, TableDynamicColumnsExample_tr_9_Template, 1, 0, "tr", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("dataSource", ctx.data);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matHeaderRowDef", ctx.columnsToDisplay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.columnsToDisplay);
    } }, directives: [i1$1.MatButton, i1.MatTable, i2.NgForOf, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 16px 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableDynamicColumnsExample, [{
        type: Component,
        args: [{
                selector: 'table-dynamic-columns-example',
                styleUrls: ['table-dynamic-columns-example.css'],
                templateUrl: 'table-dynamic-columns-example.html',
            }]
    }], null, null); })();

function TableExpandableRowsExample_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r5, " ");
} }
function TableExpandableRowsExample_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r9 = ctx.$implicit;
    const column_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r9[column_r5], " ");
} }
function TableExpandableRowsExample_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 7);
    i0.ɵɵtemplate(1, TableExpandableRowsExample_ng_container_1_th_1_Template, 2, 1, "th", 8);
    i0.ɵɵtemplate(2, TableExpandableRowsExample_ng_container_1_td_2_Template, 2, 1, "td", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("matColumnDef", column_r5);
} }
function TableExpandableRowsExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵelementStart(1, "div", 11);
    i0.ɵɵelementStart(2, "div", 12);
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 14);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 15);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 16);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 17);
    i0.ɵɵtext(12);
    i0.ɵɵelementStart(13, "span", 18);
    i0.ɵɵtext(14, " -- Wikipedia ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("colspan", ctx_r1.columnsToDisplay.length);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@detailExpand", element_r11 == ctx_r1.expandedElement ? "expanded" : "collapsed");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", element_r11.position, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r11.symbol, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r11.weight, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", element_r11.description, " ");
} }
function TableExpandableRowsExample_tr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 19);
} }
function TableExpandableRowsExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 20);
    i0.ɵɵlistener("click", function TableExpandableRowsExample_tr_5_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r14); const element_r12 = restoredCtx.$implicit; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.expandedElement = ctx_r13.expandedElement === element_r12 ? null : element_r12; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("example-expanded-row", ctx_r3.expandedElement === element_r12);
} }
function TableExpandableRowsExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
const _c0$6 = function () { return ["expandedDetail"]; };
/**
 * @title Table with expandable rows
 */
class TableExpandableRowsExample {
    constructor() {
        this.dataSource = ELEMENT_DATA$j;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
    }
}
TableExpandableRowsExample.ɵfac = function TableExpandableRowsExample_Factory(t) { return new (t || TableExpandableRowsExample)(); };
TableExpandableRowsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableExpandableRowsExample, selectors: [["table-expandable-rows-example"]], decls: 7, vars: 6, consts: [["mat-table", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "example-element-row", 3, "example-expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "example-detail-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "example-element-detail"], [1, "example-element-diagram"], [1, "example-element-position"], [1, "example-element-symbol"], [1, "example-element-name"], [1, "example-element-weight"], [1, "example-element-description"], [1, "example-element-description-attribution"], ["mat-header-row", ""], ["mat-row", "", 1, "example-element-row", 3, "click"], ["mat-row", "", 1, "example-detail-row"]], template: function TableExpandableRowsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, TableExpandableRowsExample_ng_container_1_Template, 3, 1, "ng-container", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TableExpandableRowsExample_td_3_Template, 15, 7, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(4, TableExpandableRowsExample_tr_4_Template, 1, 0, "tr", 4);
        i0.ɵɵtemplate(5, TableExpandableRowsExample_tr_5_Template, 1, 2, "tr", 5);
        i0.ɵɵtemplate(6, TableExpandableRowsExample_tr_6_Template, 1, 0, "tr", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.columnsToDisplay);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matHeaderRowDef", ctx.columnsToDisplay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.columnsToDisplay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(5, _c0$6));
    } }, directives: [i1.MatTable, i2.NgForOf, i1.MatColumnDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCellDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.example-detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\n.example-element-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram[_ngcontent-%COMP%] {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.example-element-description-attribution[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}"], data: { animation: [
            trigger('detailExpand', [
                state('collapsed', style({ height: '0px', minHeight: '0' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableExpandableRowsExample, [{
        type: Component,
        args: [{
                selector: 'table-expandable-rows-example',
                styleUrls: ['table-expandable-rows-example.css'],
                templateUrl: 'table-expandable-rows-example.html',
                animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
            }]
    }], null, null); })();
const ELEMENT_DATA$j = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
    }, {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
    }, {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
    }, {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
    }, {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
    }, {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
    }, {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
    }, {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
    }, {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
    }, {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
    },
];

function TableFilteringExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableFilteringExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.position, " ");
} }
function TableFilteringExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableFilteringExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.name, " ");
} }
function TableFilteringExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableFilteringExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r14.weight, " ");
} }
function TableFilteringExample_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableFilteringExample_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r15.symbol, " ");
} }
function TableFilteringExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
function TableFilteringExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 16);
} }
function TableFilteringExample_tr_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 17);
    i0.ɵɵelementStart(1, "td", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("No data matching the filter \"", _r0.value, "\"");
} }
const ELEMENT_DATA$i = [
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
];
/**
 * @title Table with filtering
 */
class TableFilteringExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$i);
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
TableFilteringExample.ɵfac = function TableFilteringExample_Factory(t) { return new (t || TableFilteringExample)(); };
TableFilteringExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableFilteringExample, selectors: [["table-filtering-example"]], decls: 21, vars: 3, consts: [["appearance", "standard"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function TableFilteringExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Filter");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 1, 2);
        i0.ɵɵlistener("keyup", function TableFilteringExample_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "table", 3);
        i0.ɵɵelementContainerStart(6, 4);
        i0.ɵɵtemplate(7, TableFilteringExample_th_7_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(8, TableFilteringExample_td_8_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 7);
        i0.ɵɵtemplate(10, TableFilteringExample_th_10_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(11, TableFilteringExample_td_11_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 8);
        i0.ɵɵtemplate(13, TableFilteringExample_th_13_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(14, TableFilteringExample_td_14_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(15, 9);
        i0.ɵɵtemplate(16, TableFilteringExample_th_16_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(17, TableFilteringExample_td_17_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(18, TableFilteringExample_tr_18_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(19, TableFilteringExample_tr_19_Template, 1, 0, "tr", 11);
        i0.ɵɵtemplate(20, TableFilteringExample_tr_20_Template, 3, 1, "tr", 12);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1$2.MatFormField, i1$2.MatLabel, i2$1.MatInput, i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatNoDataRow, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableFilteringExample, [{
        type: Component,
        args: [{
                selector: 'table-filtering-example',
                styleUrls: ['table-filtering-example.css'],
                templateUrl: 'table-filtering-example.html',
            }]
    }], null, null); })();

function TableFooterRowExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Item ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", transaction_r9.item, " ");
} }
function TableFooterRowExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1, " Total ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Cost ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r10.cost), " ");
} }
function TableFooterRowExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r5.getTotalCost()), " ");
} }
function TableFooterRowExample_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
function TableFooterRowExample_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableFooterRowExample_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
/**
 * @title Footer row table
 */
class TableFooterRowExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }
}
TableFooterRowExample.ɵfac = function TableFooterRowExample_Factory(t) { return new (t || TableFooterRowExample)(); };
TableFooterRowExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableFooterRowExample, selectors: [["table-footer-row-example"]], decls: 12, vars: 4, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableFooterRowExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableFooterRowExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableFooterRowExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵtemplate(4, TableFooterRowExample_td_4_Template, 2, 0, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TableFooterRowExample_th_6_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(7, TableFooterRowExample_td_7_Template, 3, 3, "td", 3);
        i0.ɵɵtemplate(8, TableFooterRowExample_td_8_Template, 3, 3, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(9, TableFooterRowExample_tr_9_Template, 1, 0, "tr", 6);
        i0.ɵɵtemplate(10, TableFooterRowExample_tr_10_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(11, TableFooterRowExample_tr_11_Template, 1, 0, "tr", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.transactions);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableFooterRowExample, [{
        type: Component,
        args: [{
                selector: 'table-footer-row-example',
                styleUrls: ['table-footer-row-example.css'],
                templateUrl: 'table-footer-row-example.html',
            }]
    }], null, null); })();

function TableHttpExample_div_1_mat_spinner_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner");
} }
function TableHttpExample_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1, " GitHub's API rate limit has been reached. It will be reset in one minute. ");
    i0.ɵɵelementEnd();
} }
function TableHttpExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, TableHttpExample_div_1_mat_spinner_1_Template, 1, 0, "mat-spinner", 15);
    i0.ɵɵtemplate(2, TableHttpExample_div_1_div_2_Template, 2, 0, "div", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isLoadingResults);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.isRateLimitReached);
} }
function TableHttpExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, "#");
    i0.ɵɵelementEnd();
} }
function TableHttpExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r13.number);
} }
function TableHttpExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, "Title");
    i0.ɵɵelementEnd();
} }
function TableHttpExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r14.title);
} }
function TableHttpExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, "State");
    i0.ɵɵelementEnd();
} }
function TableHttpExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(row_r15.state);
} }
function TableHttpExample_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 20);
    i0.ɵɵtext(1, " Created ");
    i0.ɵɵelementEnd();
} }
function TableHttpExample_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 1, row_r16.created_at));
} }
function TableHttpExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
function TableHttpExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
/**
 * @title Table retrieving data through HTTP
 */
class TableHttpExample {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    ngAfterViewInit() {
        this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}), switchMap(() => {
            this.isLoadingResults = true;
            return this.exampleDatabase.getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex)
                .pipe(catchError(() => of(null)));
        }), map(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = data === null;
            if (data === null) {
                return [];
            }
            // Only refresh the result length if there is new data. In case of rate
            // limit errors, we do not want to reset the paginator to zero, as that
            // would prevent users from re-triggering requests.
            this.resultsLength = data.total_count;
            return data.items;
        })).subscribe(data => this.data = data);
    }
}
TableHttpExample.ɵfac = function TableHttpExample_Factory(t) { return new (t || TableHttpExample)(i0.ɵɵdirectiveInject(i1$3.HttpClient)); };
TableHttpExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableHttpExample, selectors: [["table-http-example"]], viewQuery: function TableHttpExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, 5);
        i0.ɵɵviewQuery(MatSort, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 19, vars: 6, consts: [[1, "example-container", "mat-elevation-z8"], ["class", "example-loading-shade", 4, "ngIf"], [1, "example-table-container"], ["mat-table", "", "matSort", "", "matSortActive", "created", "matSortDisableClear", "", "matSortDirection", "desc", 1, "example-table", 3, "dataSource"], ["matColumnDef", "number"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "title"], ["matColumnDef", "state"], ["matColumnDef", "created"], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of GitHub search results", 3, "length", "pageSize"], [1, "example-loading-shade"], [4, "ngIf"], ["class", "example-rate-limit-reached", 4, "ngIf"], [1, "example-rate-limit-reached"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "disableClear", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableHttpExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, TableHttpExample_div_1_Template, 3, 2, "div", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "table", 3);
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableHttpExample_th_5_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(6, TableHttpExample_td_6_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 7);
        i0.ɵɵtemplate(8, TableHttpExample_th_8_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(9, TableHttpExample_td_9_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 8);
        i0.ɵɵtemplate(11, TableHttpExample_th_11_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(12, TableHttpExample_td_12_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 9);
        i0.ɵɵtemplate(14, TableHttpExample_th_14_Template, 2, 0, "th", 10);
        i0.ɵɵtemplate(15, TableHttpExample_td_15_Template, 3, 3, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(16, TableHttpExample_tr_16_Template, 1, 0, "tr", 11);
        i0.ɵɵtemplate(17, TableHttpExample_tr_17_Template, 1, 0, "tr", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(18, "mat-paginator", 13);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isLoadingResults || ctx.isRateLimitReached);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("dataSource", ctx.data);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("length", ctx.resultsLength)("pageSize", 30);
    } }, directives: [i2.NgIf, i1.MatTable, i4.MatSort, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i5.MatPaginator, i6.MatSpinner, i1.MatHeaderCell, i1.MatCell, i4.MatSortHeader, i1.MatHeaderRow, i1.MatRow], pipes: [i2.DatePipe], styles: [".example-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.example-table-container[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 200px;\n  max-height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-loading-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached[_ngcontent-%COMP%] {\n  max-width: 360px;\n  text-align: center;\n}\n\n\n.mat-column-number[_ngcontent-%COMP%], .mat-column-state[_ngcontent-%COMP%] {\n  max-width: 64px;\n}\n\n.mat-column-created[_ngcontent-%COMP%] {\n  max-width: 124px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableHttpExample, [{
        type: Component,
        args: [{
                selector: 'table-http-example',
                styleUrls: ['table-http-example.css'],
                templateUrl: 'table-http-example.html',
            }]
    }], function () { return [{ type: i1$3.HttpClient }]; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();
/** An example database that the data source uses to retrieve data for the table. */
class ExampleHttpDatabase {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    getRepoIssues(sort, order, page) {
        const href = 'https://api.github.com/search/issues';
        const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;
        return this._httpClient.get(requestUrl);
    }
}

function TableMultipleHeaderFooterExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Item ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", transaction_r14.item, " ");
} }
function TableMultipleHeaderFooterExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1, " Total ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Cost ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r15.cost), " ");
} }
function TableMultipleHeaderFooterExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r5.getTotalCost()), " ");
} }
function TableMultipleHeaderFooterExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Name of the item purchased ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Cost of the item in USD ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1, " Please note that the cost of items displayed are completely and totally made up. ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 19);
} }
function TableMultipleHeaderFooterExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function TableMultipleHeaderFooterExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
function TableMultipleHeaderFooterExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
function TableMultipleHeaderFooterExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 23);
} }
const _c0$5 = function () { return ["item-description", "cost-description"]; };
const _c1$3 = function () { return ["disclaimer"]; };
/**
 * @title Table with multiple header and footer rows
 */
class TableMultipleHeaderFooterExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }
}
TableMultipleHeaderFooterExample.ɵfac = function TableMultipleHeaderFooterExample_Factory(t) { return new (t || TableMultipleHeaderFooterExample)(); };
TableMultipleHeaderFooterExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableMultipleHeaderFooterExample, selectors: [["table-multiple-header-footer-example"]], decls: 20, vars: 8, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["matColumnDef", "item-description"], ["matColumnDef", "cost-description"], ["matColumnDef", "disclaimer"], ["mat-footer-cell", "", "colspan", "2", 4, "matFooterCellDef"], ["mat-header-row", "", "class", "example-first-header-row", 4, "matHeaderRowDef"], ["mat-header-row", "", "class", "example-second-header-row", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "example-first-footer-row", 4, "matFooterRowDef"], ["mat-footer-row", "", "class", "example-second-footer-row", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-footer-cell", "", "colspan", "2"], ["mat-header-row", "", 1, "example-first-header-row"], ["mat-header-row", "", 1, "example-second-header-row"], ["mat-row", ""], ["mat-footer-row", "", 1, "example-first-footer-row"], ["mat-footer-row", "", 1, "example-second-footer-row"]], template: function TableMultipleHeaderFooterExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableMultipleHeaderFooterExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableMultipleHeaderFooterExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵtemplate(4, TableMultipleHeaderFooterExample_td_4_Template, 2, 0, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TableMultipleHeaderFooterExample_th_6_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(7, TableMultipleHeaderFooterExample_td_7_Template, 3, 3, "td", 3);
        i0.ɵɵtemplate(8, TableMultipleHeaderFooterExample_td_8_Template, 3, 3, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 6);
        i0.ɵɵtemplate(10, TableMultipleHeaderFooterExample_th_10_Template, 2, 0, "th", 2);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(11, 7);
        i0.ɵɵtemplate(12, TableMultipleHeaderFooterExample_th_12_Template, 2, 0, "th", 2);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 8);
        i0.ɵɵtemplate(14, TableMultipleHeaderFooterExample_td_14_Template, 2, 0, "td", 9);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(15, TableMultipleHeaderFooterExample_tr_15_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(16, TableMultipleHeaderFooterExample_tr_16_Template, 1, 0, "tr", 11);
        i0.ɵɵtemplate(17, TableMultipleHeaderFooterExample_tr_17_Template, 1, 0, "tr", 12);
        i0.ɵɵtemplate(18, TableMultipleHeaderFooterExample_tr_18_Template, 1, 0, "tr", 13);
        i0.ɵɵtemplate(19, TableMultipleHeaderFooterExample_tr_19_Template, 1, 0, "tr", 14);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.transactions);
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matHeaderRowDef", i0.ɵɵpureFunction0(6, _c0$5));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", i0.ɵɵpureFunction0(7, _c1$3));
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-first-header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.example-second-header-row[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.example-first-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.example-second-footer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-style: italic;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableMultipleHeaderFooterExample, [{
        type: Component,
        args: [{
                selector: 'table-multiple-header-footer-example',
                styleUrls: ['table-multiple-header-footer-example.css'],
                templateUrl: 'table-multiple-header-footer-example.html',
            }]
    }], null, null); })();

function TableOverviewExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " ID ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r12.id, " ");
} }
function TableOverviewExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Progress ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r13.progress, "% ");
} }
function TableOverviewExample_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r14.name, " ");
} }
function TableOverviewExample_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Fruit ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r15.fruit, " ");
} }
function TableOverviewExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 17);
} }
function TableOverviewExample_tr_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 18);
} }
function TableOverviewExample_tr_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 19);
    i0.ɵɵelementStart(1, "td", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("No data matching the filter \"", _r0.value, "\"");
} }
const _c0$4 = function () { return [5, 10, 25, 100]; };
/** Constants used to fill up our data base. */
const FRUITS = [
    'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
/**
 * @title Data table with sorting, pagination, and filtering.
 */
class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'fruit'];
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
TableOverviewExample.ɵfac = function TableOverviewExample_Factory(t) { return new (t || TableOverviewExample)(); };
TableOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableOverviewExample, selectors: [["table-overview-example"]], viewQuery: function TableOverviewExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, 5);
        i0.ɵɵviewQuery(MatSort, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 23, vars: 5, consts: [["appearance", "standard"], ["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "progress"], ["matColumnDef", "name"], ["matColumnDef", "fruit"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function TableOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Filter");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 1, 2);
        i0.ɵɵlistener("keyup", function TableOverviewExample_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "table", 4);
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableOverviewExample_th_8_Template, 2, 0, "th", 6);
        i0.ɵɵtemplate(9, TableOverviewExample_td_9_Template, 2, 1, "td", 7);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 8);
        i0.ɵɵtemplate(11, TableOverviewExample_th_11_Template, 2, 0, "th", 6);
        i0.ɵɵtemplate(12, TableOverviewExample_td_12_Template, 2, 1, "td", 7);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 9);
        i0.ɵɵtemplate(14, TableOverviewExample_th_14_Template, 2, 0, "th", 6);
        i0.ɵɵtemplate(15, TableOverviewExample_td_15_Template, 2, 1, "td", 7);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(16, 10);
        i0.ɵɵtemplate(17, TableOverviewExample_th_17_Template, 2, 0, "th", 6);
        i0.ɵɵtemplate(18, TableOverviewExample_td_18_Template, 2, 1, "td", 7);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(19, TableOverviewExample_tr_19_Template, 1, 0, "tr", 11);
        i0.ɵɵtemplate(20, TableOverviewExample_tr_20_Template, 1, 0, "tr", 12);
        i0.ɵɵtemplate(21, TableOverviewExample_tr_21_Template, 3, 1, "tr", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(22, "mat-paginator", 14);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("pageSizeOptions", i0.ɵɵpureFunction0(4, _c0$4));
    } }, directives: [i1$2.MatFormField, i1$2.MatLabel, i2$1.MatInput, i1.MatTable, i4.MatSort, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatNoDataRow, i5.MatPaginator, i1.MatHeaderCell, i4.MatSortHeader, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableOverviewExample, [{
        type: Component,
        args: [{
                selector: 'table-overview-example',
                styleUrls: ['table-overview-example.css'],
                templateUrl: 'table-overview-example.html',
            }]
    }], function () { return []; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();
/** Builds and returns a new User. */
function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
    };
}

function TablePaginationExample_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TablePaginationExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function TablePaginationExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TablePaginationExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function TablePaginationExample_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TablePaginationExample_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function TablePaginationExample_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TablePaginationExample_td_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function TablePaginationExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TablePaginationExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
const _c0$3 = function () { return [5, 10, 20]; };
/**
 * @title Table with pagination
 */
class TablePaginationExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$h);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}
TablePaginationExample.ɵfac = function TablePaginationExample_Factory(t) { return new (t || TablePaginationExample)(); };
TablePaginationExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TablePaginationExample, selectors: [["table-pagination-example"]], viewQuery: function TablePaginationExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
    } }, decls: 17, vars: 5, consts: [[1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", "aria-label", "Select page of periodic elements", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TablePaginationExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TablePaginationExample_th_3_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(4, TablePaginationExample_td_4_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TablePaginationExample_th_6_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(7, TablePaginationExample_td_7_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(8, 6);
        i0.ɵɵtemplate(9, TablePaginationExample_th_9_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(10, TablePaginationExample_td_10_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(11, 7);
        i0.ɵɵtemplate(12, TablePaginationExample_th_12_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(13, TablePaginationExample_td_13_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(14, TablePaginationExample_tr_14_Template, 1, 0, "tr", 8);
        i0.ɵɵtemplate(15, TablePaginationExample_tr_15_Template, 1, 0, "tr", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "mat-paginator", 10);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("pageSizeOptions", i0.ɵɵpureFunction0(4, _c0$3));
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i5.MatPaginator, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TablePaginationExample, [{
        type: Component,
        args: [{
                selector: 'table-pagination-example',
                styleUrls: ['table-pagination-example.css'],
                templateUrl: 'table-pagination-example.html',
            }]
    }], null, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }] }); })();
const ELEMENT_DATA$h = [
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

function TableRowContextExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " $implicit ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r16, " ");
} }
function TableRowContextExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " index ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r17 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", index_r17, " ");
} }
function TableRowContextExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " count ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const count_r18 = ctx.count;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", count_r18, " ");
} }
function TableRowContextExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " first ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const first_r19 = ctx.first;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", first_r19, " ");
} }
function TableRowContextExample_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " last ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const last_r20 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", last_r20, " ");
} }
function TableRowContextExample_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " even ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const even_r21 = ctx.even;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", even_r21, " ");
} }
function TableRowContextExample_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " odd ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const odd_r22 = ctx.odd;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", odd_r22, " ");
} }
function TableRowContextExample_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableRowContextExample_tr_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
/**
 * @title Table showing each row context properties.
 */
class TableRowContextExample {
    constructor() {
        this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
        this.data = ['one', 'two', 'three', 'four', 'five'];
    }
}
TableRowContextExample.ɵfac = function TableRowContextExample_Factory(t) { return new (t || TableRowContextExample)(); };
TableRowContextExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableRowContextExample, selectors: [["table-row-context-example"]], decls: 24, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "$implicit"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "index"], ["matColumnDef", "count"], ["matColumnDef", "first"], ["matColumnDef", "last"], ["matColumnDef", "even"], ["matColumnDef", "odd"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableRowContextExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableRowContextExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableRowContextExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableRowContextExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableRowContextExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableRowContextExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableRowContextExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableRowContextExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableRowContextExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 7);
        i0.ɵɵtemplate(14, TableRowContextExample_th_14_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(15, TableRowContextExample_td_15_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(16, 8);
        i0.ɵɵtemplate(17, TableRowContextExample_th_17_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(18, TableRowContextExample_td_18_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(19, 9);
        i0.ɵɵtemplate(20, TableRowContextExample_th_20_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(21, TableRowContextExample_td_21_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(22, TableRowContextExample_tr_22_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(23, TableRowContextExample_tr_23_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.data);
        i0.ɵɵadvance(22);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableRowContextExample, [{
        type: Component,
        args: [{
                selector: 'table-row-context-example',
                styleUrls: ['table-row-context-example.css'],
                templateUrl: 'table-row-context-example.html',
            }]
    }], null, null); })();

function TableSelectionExample_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵelementStart(1, "mat-checkbox", 11);
    i0.ɵɵlistener("change", function TableSelectionExample_th_2_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return $event ? ctx_r12.masterToggle() : null; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected())("aria-label", ctx_r0.checkboxLabel());
} }
function TableSelectionExample_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelementStart(1, "mat-checkbox", 13);
    i0.ɵɵlistener("click", function TableSelectionExample_td_3_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function TableSelectionExample_td_3_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r17); const row_r14 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(); return $event ? ctx_r16.selection.toggle(row_r14) : null; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r1.selection.isSelected(row_r14))("aria-label", ctx_r1.checkboxLabel(row_r14));
} }
function TableSelectionExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableSelectionExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r18.position, " ");
} }
function TableSelectionExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableSelectionExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r19.name, " ");
} }
function TableSelectionExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableSelectionExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r20.weight, " ");
} }
function TableSelectionExample_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableSelectionExample_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r21.symbol, " ");
} }
function TableSelectionExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableSelectionExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 15);
    i0.ɵɵlistener("click", function TableSelectionExample_tr_17_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r24); const row_r22 = restoredCtx.$implicit; const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.selection.toggle(row_r22); });
    i0.ɵɵelementEnd();
} }
const ELEMENT_DATA$g = [
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
];
/**
 * @title Table with selection
 */
class TableSelectionExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$g);
        this.selection = new SelectionModel(true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
TableSelectionExample.ɵfac = function TableSelectionExample_Factory(t) { return new (t || TableSelectionExample)(); };
TableSelectionExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableSelectionExample, selectors: [["table-selection-example"]], decls: 18, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function TableSelectionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableSelectionExample_th_2_Template, 2, 3, "th", 2);
        i0.ɵɵtemplate(3, TableSelectionExample_td_3_Template, 2, 2, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableSelectionExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableSelectionExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableSelectionExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableSelectionExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableSelectionExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableSelectionExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 7);
        i0.ɵɵtemplate(14, TableSelectionExample_th_14_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(15, TableSelectionExample_td_15_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(16, TableSelectionExample_tr_16_Template, 1, 0, "tr", 8);
        i0.ɵɵtemplate(17, TableSelectionExample_tr_17_Template, 1, 0, "tr", 9);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i2$2.MatCheckbox, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableSelectionExample, [{
        type: Component,
        args: [{
                selector: 'table-selection-example',
                styleUrls: ['table-selection-example.css'],
                templateUrl: 'table-selection-example.html',
            }]
    }], null, null); })();

function TableSortingExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableSortingExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function TableSortingExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 14);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableSortingExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function TableSortingExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableSortingExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function TableSortingExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 16);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableSortingExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function TableSortingExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 17);
} }
function TableSortingExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 18);
} }
const ELEMENT_DATA$f = [
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
];
/**
 * @title Table with sorting
 */
class TableSortingExample {
    constructor(_liveAnnouncer) {
        this._liveAnnouncer = _liveAnnouncer;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$f);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState) {
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        if (sortState.direction) {
            this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
        }
        else {
            this._liveAnnouncer.announce('Sorting cleared');
        }
    }
}
TableSortingExample.ɵfac = function TableSortingExample_Factory(t) { return new (t || TableSortingExample)(i0.ɵɵdirectiveInject(i1$4.LiveAnnouncer)); };
TableSortingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableSortingExample, selectors: [["table-sorting-example"]], viewQuery: function TableSortingExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatSort, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 15, vars: 3, consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by number", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by name", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by weight", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by symbol", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by number"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by name"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by weight"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by symbol"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableSortingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵlistener("matSortChange", function TableSortingExample_Template_table_matSortChange_0_listener($event) { return ctx.announceSortChange($event); });
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableSortingExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableSortingExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableSortingExample_th_5_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(6, TableSortingExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 6);
        i0.ɵɵtemplate(8, TableSortingExample_th_8_Template, 2, 0, "th", 7);
        i0.ɵɵtemplate(9, TableSortingExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 8);
        i0.ɵɵtemplate(11, TableSortingExample_th_11_Template, 2, 0, "th", 9);
        i0.ɵɵtemplate(12, TableSortingExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, TableSortingExample_tr_13_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(14, TableSortingExample_tr_14_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i4.MatSort, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i4.MatSortHeader, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableSortingExample, [{
        type: Component,
        args: [{
                selector: 'table-sorting-example',
                styleUrls: ['table-sorting-example.css'],
                templateUrl: 'table-sorting-example.html',
            }]
    }], function () { return [{ type: i1$4.LiveAnnouncer }]; }, { sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();

function TableStickyColumnsExample_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.name, " ");
} }
function TableStickyColumnsExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.position, " ");
} }
function TableStickyColumnsExample_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r14.weight, " ");
} }
function TableStickyColumnsExample_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r15.symbol, " ");
} }
function TableStickyColumnsExample_th_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 11);
} }
function TableStickyColumnsExample_td_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "more_vert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TableStickyColumnsExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableStickyColumnsExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
/**
 * @title Table with sticky columns
 */
class TableStickyColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
        this.dataSource = ELEMENT_DATA$e;
    }
}
TableStickyColumnsExample.ɵfac = function TableStickyColumnsExample_Factory(t) { return new (t || TableStickyColumnsExample)(); };
TableStickyColumnsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableStickyColumnsExample, selectors: [["table-sticky-columns-example"]], decls: 19, vars: 3, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["matColumnDef", "star", "stickyEnd", ""], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableStickyColumnsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TableStickyColumnsExample_th_3_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(4, TableStickyColumnsExample_td_4_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TableStickyColumnsExample_th_6_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(7, TableStickyColumnsExample_td_7_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(8, 6);
        i0.ɵɵtemplate(9, TableStickyColumnsExample_th_9_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(10, TableStickyColumnsExample_td_10_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(11, 7);
        i0.ɵɵtemplate(12, TableStickyColumnsExample_th_12_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(13, TableStickyColumnsExample_td_13_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(14, 8);
        i0.ɵɵtemplate(15, TableStickyColumnsExample_th_15_Template, 1, 0, "th", 3);
        i0.ɵɵtemplate(16, TableStickyColumnsExample_td_16_Template, 3, 0, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(17, TableStickyColumnsExample_tr_17_Template, 1, 0, "tr", 9);
        i0.ɵɵtemplate(18, TableStickyColumnsExample_tr_18_Template, 1, 0, "tr", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i2$3.MatIcon, i1.MatHeaderRow, i1.MatRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 550px;\n  max-width: 100%;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 800px;\n}\n\ntd.mat-column-star[_ngcontent-%COMP%] {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position[_ngcontent-%COMP%], td.mat-column-position[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\n.mat-table-sticky-border-elem-right[_ngcontent-%COMP%] {\n  border-left: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky-border-elem-left[_ngcontent-%COMP%] {\n  border-right: 1px solid #e0e0e0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableStickyColumnsExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-columns-example',
                styleUrls: ['table-sticky-columns-example.css'],
                templateUrl: 'table-sticky-columns-example.html',
            }]
    }], null, null); })();
const ELEMENT_DATA$e = [
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
];

function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell");
    i0.ɵɵtext(1, " Position ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r25.position, " ");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-footer-cell");
    i0.ɵɵtext(1, " Position Footer ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell");
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_cell_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r26.name, " ");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-footer-cell");
    i0.ɵɵtext(1, " Name Footer ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell");
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_cell_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r27.weight, " ");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-footer-cell");
    i0.ɵɵtext(1, " Weight Footer ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell");
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r28.symbol, " ");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-footer-cell");
    i0.ɵɵtext(1, " Symbol Footer ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_cell_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell");
    i0.ɵɵtext(1, " Filler header cell ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_cell_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell");
    i0.ɵɵtext(1, " Filler data cell ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-footer-cell");
    i0.ɵɵtext(1, " Filler footer cell ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_row_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-header-row");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_header_row_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-header-row");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_row_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-row");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_row_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-footer-row");
} }
function TableStickyComplexFlexExample_mat_table_34_mat_footer_row_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-footer-row");
} }
function TableStickyComplexFlexExample_mat_table_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-table", 15);
    i0.ɵɵelementContainerStart(1, 16);
    i0.ɵɵtemplate(2, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 17);
    i0.ɵɵtemplate(3, TableStickyComplexFlexExample_mat_table_34_mat_cell_3_Template, 2, 1, "mat-cell", 18);
    i0.ɵɵtemplate(4, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_4_Template, 2, 0, "mat-footer-cell", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(5, 20);
    i0.ɵɵtemplate(6, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_6_Template, 2, 0, "mat-header-cell", 17);
    i0.ɵɵtemplate(7, TableStickyComplexFlexExample_mat_table_34_mat_cell_7_Template, 2, 1, "mat-cell", 18);
    i0.ɵɵtemplate(8, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_8_Template, 2, 0, "mat-footer-cell", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(9, 21);
    i0.ɵɵtemplate(10, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_10_Template, 2, 0, "mat-header-cell", 17);
    i0.ɵɵtemplate(11, TableStickyComplexFlexExample_mat_table_34_mat_cell_11_Template, 2, 1, "mat-cell", 18);
    i0.ɵɵtemplate(12, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_12_Template, 2, 0, "mat-footer-cell", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(13, 22);
    i0.ɵɵtemplate(14, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 17);
    i0.ɵɵtemplate(15, TableStickyComplexFlexExample_mat_table_34_mat_cell_15_Template, 2, 1, "mat-cell", 18);
    i0.ɵɵtemplate(16, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_16_Template, 2, 0, "mat-footer-cell", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(17, 23);
    i0.ɵɵtemplate(18, TableStickyComplexFlexExample_mat_table_34_mat_header_cell_18_Template, 2, 0, "mat-header-cell", 17);
    i0.ɵɵtemplate(19, TableStickyComplexFlexExample_mat_table_34_mat_cell_19_Template, 2, 0, "mat-cell", 18);
    i0.ɵɵtemplate(20, TableStickyComplexFlexExample_mat_table_34_mat_footer_cell_20_Template, 2, 0, "mat-footer-cell", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(21, TableStickyComplexFlexExample_mat_table_34_mat_header_row_21_Template, 1, 0, "mat-header-row", 24);
    i0.ɵɵtemplate(22, TableStickyComplexFlexExample_mat_table_34_mat_header_row_22_Template, 1, 0, "mat-header-row", 24);
    i0.ɵɵtemplate(23, TableStickyComplexFlexExample_mat_table_34_mat_row_23_Template, 1, 0, "mat-row", 25);
    i0.ɵɵtemplate(24, TableStickyComplexFlexExample_mat_table_34_mat_footer_row_24_Template, 1, 0, "mat-footer-row", 26);
    i0.ɵɵtemplate(25, TableStickyComplexFlexExample_mat_table_34_mat_footer_row_25_Template, 1, 0, "mat-footer-row", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(24);
    const _r0 = i0.ɵɵreference(8);
    const _r1 = i0.ɵɵreference(16);
    i0.ɵɵproperty("dataSource", ctx_r3.dataSource);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("sticky", ctx_r3.isSticky(_r2, "position"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("sticky", ctx_r3.isSticky(_r2, "name"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("stickyEnd", ctx_r3.isSticky(_r2, "weight"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("stickyEnd", ctx_r3.isSticky(_r2, "symbol"));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r3.displayedColumns)("matHeaderRowDefSticky", ctx_r3.isSticky(_r0, "header-1"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r3.displayedColumns)("matHeaderRowDefSticky", ctx_r3.isSticky(_r0, "header-2"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r3.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matFooterRowDef", ctx_r3.displayedColumns)("matFooterRowDefSticky", ctx_r3.isSticky(_r1, "footer-1"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matFooterRowDef", ctx_r3.displayedColumns)("matFooterRowDefSticky", ctx_r3.isSticky(_r1, "footer-2"));
} }
const _c0$2 = function () { return ["header-1"]; };
const _c1$2 = function () { return ["footer-1"]; };
const _c2$1 = function () { return ["position", "symbol"]; };
/**
 * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
class TableStickyComplexFlexExample {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA$d;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
}
TableStickyComplexFlexExample.ɵfac = function TableStickyComplexFlexExample_Factory(t) { return new (t || TableStickyComplexFlexExample)(); };
TableStickyComplexFlexExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableStickyComplexFlexExample, selectors: [["table-sticky-complex-flex-example"]], decls: 35, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["multiple", "", 1, "example-sticky-toggle-group", 3, "value"], ["stickyHeaders", "matButtonToggleGroup"], ["value", "header-1"], ["value", "header-2"], ["stickyFooters", "matButtonToggleGroup"], ["value", "footer-1"], ["value", "footer-2"], ["stickyColumns", "matButtonToggleGroup"], ["value", "position"], ["value", "name"], ["value", "weight"], ["value", "symbol"], [1, "example-container", "mat-elevation-z8"], [3, "dataSource", 4, "ngFor", "ngForOf"], [3, "dataSource"], ["matColumnDef", "position", 3, "sticky"], [4, "matHeaderCellDef"], [4, "matCellDef"], [4, "matFooterCellDef"], ["matColumnDef", "name", 3, "sticky"], ["matColumnDef", "weight", 3, "stickyEnd"], ["matColumnDef", "symbol", 3, "stickyEnd"], ["matColumnDef", "filler"], [4, "matHeaderRowDef", "matHeaderRowDefSticky"], [4, "matRowDef", "matRowDefColumns"], [4, "matFooterRowDef", "matFooterRowDefSticky"]], template: function TableStickyComplexFlexExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function TableStickyComplexFlexExample_Template_button_click_1_listener() { return ctx.tables.push(ctx.tables.length); });
        i0.ɵɵtext(2, "Add table");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵlistener("click", function TableStickyComplexFlexExample_Template_button_click_3_listener() { return ctx.tables.pop(); });
        i0.ɵɵtext(4, "Remove table");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵtext(6, " Sticky Headers: ");
        i0.ɵɵelementStart(7, "mat-button-toggle-group", 1, 2);
        i0.ɵɵelementStart(9, "mat-button-toggle", 3);
        i0.ɵɵtext(10, " Row 1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-button-toggle", 4);
        i0.ɵɵtext(12, " Row 2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div");
        i0.ɵɵtext(14, " Sticky Footers: ");
        i0.ɵɵelementStart(15, "mat-button-toggle-group", 1, 5);
        i0.ɵɵelementStart(17, "mat-button-toggle", 6);
        i0.ɵɵtext(18, " Row 1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mat-button-toggle", 7);
        i0.ɵɵtext(20, " Row 2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵtext(22, " Sticky Columns: ");
        i0.ɵɵelementStart(23, "mat-button-toggle-group", 1, 8);
        i0.ɵɵelementStart(25, "mat-button-toggle", 9);
        i0.ɵɵtext(26, " Position ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "mat-button-toggle", 10);
        i0.ɵɵtext(28, " Name ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "mat-button-toggle", 11);
        i0.ɵɵtext(30, " Weight ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "mat-button-toggle", 12);
        i0.ɵɵtext(32, " Symbol ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 13);
        i0.ɵɵtemplate(34, TableStickyComplexFlexExample_mat_table_34_Template, 26, 14, "mat-table", 14);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("value", i0.ɵɵpureFunction0(4, _c0$2));
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("value", i0.ɵɵpureFunction0(5, _c1$2));
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("value", i0.ɵɵpureFunction0(6, _c2$1));
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("ngForOf", ctx.tables);
    } }, directives: [i1$1.MatButton, i2$4.MatButtonToggleGroup, i2$4.MatButtonToggle, i2.NgForOf, i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%] {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-column-filler[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-header-row[_ngcontent-%COMP%], .mat-footer-row[_ngcontent-%COMP%], .mat-row[_ngcontent-%COMP%] {\n  min-width: 1920px; \n}\n\n.mat-table-sticky-border-elem-top[_ngcontent-%COMP%] {\n  border-bottom: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-right[_ngcontent-%COMP%] {\n  border-left: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-bottom[_ngcontent-%COMP%] {\n  border-top: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-left[_ngcontent-%COMP%] {\n  border-right: 2px solid midnightblue;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableStickyComplexFlexExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-complex-flex-example',
                styleUrls: ['table-sticky-complex-flex-example.css'],
                templateUrl: 'table-sticky-complex-flex-example.html',
            }]
    }], function () { return []; }, null); })();
const ELEMENT_DATA$d = [
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
];

function TableStickyComplexExample_table_34_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 27);
    i0.ɵɵtext(1, " Position ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r25.position, " ");
} }
function TableStickyComplexExample_table_34_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 29);
    i0.ɵɵtext(1, " Position Footer ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 27);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r26.name, " ");
} }
function TableStickyComplexExample_table_34_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 29);
    i0.ɵɵtext(1, " Name Footer ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 27);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r27.weight, " ");
} }
function TableStickyComplexExample_table_34_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 29);
    i0.ɵɵtext(1, " Weight Footer ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 27);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r28.symbol, " ");
} }
function TableStickyComplexExample_table_34_td_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 29);
    i0.ɵɵtext(1, " Symbol Footer ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_th_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 27);
    i0.ɵɵtext(1, " Filler header cell ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 28);
    i0.ɵɵtext(1, " Filler data cell ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_td_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 29);
    i0.ɵɵtext(1, " Filler footer cell ");
    i0.ɵɵelementEnd();
} }
function TableStickyComplexExample_table_34_tr_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 30);
} }
function TableStickyComplexExample_table_34_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 30);
} }
function TableStickyComplexExample_table_34_tr_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 31);
} }
function TableStickyComplexExample_table_34_tr_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 32);
} }
function TableStickyComplexExample_table_34_tr_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 32);
} }
function TableStickyComplexExample_table_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 15);
    i0.ɵɵelementContainerStart(1, 16);
    i0.ɵɵtemplate(2, TableStickyComplexExample_table_34_th_2_Template, 2, 0, "th", 17);
    i0.ɵɵtemplate(3, TableStickyComplexExample_table_34_td_3_Template, 2, 1, "td", 18);
    i0.ɵɵtemplate(4, TableStickyComplexExample_table_34_td_4_Template, 2, 0, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(5, 20);
    i0.ɵɵtemplate(6, TableStickyComplexExample_table_34_th_6_Template, 2, 0, "th", 17);
    i0.ɵɵtemplate(7, TableStickyComplexExample_table_34_td_7_Template, 2, 1, "td", 18);
    i0.ɵɵtemplate(8, TableStickyComplexExample_table_34_td_8_Template, 2, 0, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(9, 21);
    i0.ɵɵtemplate(10, TableStickyComplexExample_table_34_th_10_Template, 2, 0, "th", 17);
    i0.ɵɵtemplate(11, TableStickyComplexExample_table_34_td_11_Template, 2, 1, "td", 18);
    i0.ɵɵtemplate(12, TableStickyComplexExample_table_34_td_12_Template, 2, 0, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(13, 22);
    i0.ɵɵtemplate(14, TableStickyComplexExample_table_34_th_14_Template, 2, 0, "th", 17);
    i0.ɵɵtemplate(15, TableStickyComplexExample_table_34_td_15_Template, 2, 1, "td", 18);
    i0.ɵɵtemplate(16, TableStickyComplexExample_table_34_td_16_Template, 2, 0, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(17, 23);
    i0.ɵɵtemplate(18, TableStickyComplexExample_table_34_th_18_Template, 2, 0, "th", 17);
    i0.ɵɵtemplate(19, TableStickyComplexExample_table_34_td_19_Template, 2, 0, "td", 18);
    i0.ɵɵtemplate(20, TableStickyComplexExample_table_34_td_20_Template, 2, 0, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(21, TableStickyComplexExample_table_34_tr_21_Template, 1, 0, "tr", 24);
    i0.ɵɵtemplate(22, TableStickyComplexExample_table_34_tr_22_Template, 1, 0, "tr", 24);
    i0.ɵɵtemplate(23, TableStickyComplexExample_table_34_tr_23_Template, 1, 0, "tr", 25);
    i0.ɵɵtemplate(24, TableStickyComplexExample_table_34_tr_24_Template, 1, 0, "tr", 26);
    i0.ɵɵtemplate(25, TableStickyComplexExample_table_34_tr_25_Template, 1, 0, "tr", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(24);
    const _r0 = i0.ɵɵreference(8);
    const _r1 = i0.ɵɵreference(16);
    i0.ɵɵproperty("dataSource", ctx_r3.dataSource);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("sticky", ctx_r3.isSticky(_r2, "position"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("sticky", ctx_r3.isSticky(_r2, "name"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("stickyEnd", ctx_r3.isSticky(_r2, "weight"));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("stickyEnd", ctx_r3.isSticky(_r2, "symbol"));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r3.displayedColumns)("matHeaderRowDefSticky", ctx_r3.isSticky(_r0, "header-1"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r3.displayedColumns)("matHeaderRowDefSticky", ctx_r3.isSticky(_r0, "header-2"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matRowDefColumns", ctx_r3.displayedColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matFooterRowDef", ctx_r3.displayedColumns)("matFooterRowDefSticky", ctx_r3.isSticky(_r1, "footer-1"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matFooterRowDef", ctx_r3.displayedColumns)("matFooterRowDefSticky", ctx_r3.isSticky(_r1, "footer-2"));
} }
const _c0$1 = function () { return ["header-1"]; };
const _c1$1 = function () { return ["footer-1"]; };
const _c2 = function () { return ["position", "symbol"]; };
/**
 * @title Tables with toggle-able sticky headers, footers, and columns
 */
class TableStickyComplexExample {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA$c;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
}
TableStickyComplexExample.ɵfac = function TableStickyComplexExample_Factory(t) { return new (t || TableStickyComplexExample)(); };
TableStickyComplexExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableStickyComplexExample, selectors: [["table-sticky-complex-example"]], decls: 35, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["multiple", "", 1, "example-sticky-toggle-group", 3, "value"], ["stickyHeaders", "matButtonToggleGroup"], ["value", "header-1"], ["value", "header-2"], ["stickyFooters", "matButtonToggleGroup"], ["value", "footer-1"], ["value", "footer-2"], ["stickyColumns", "matButtonToggleGroup"], ["value", "position"], ["value", "name"], ["value", "weight"], ["value", "symbol"], [1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource", 4, "ngFor", "ngForOf"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position", 3, "sticky"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "name", 3, "sticky"], ["matColumnDef", "weight", 3, "stickyEnd"], ["matColumnDef", "symbol", 3, "stickyEnd"], ["matColumnDef", "filler"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableStickyComplexExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function TableStickyComplexExample_Template_button_click_1_listener() { return ctx.tables.push(ctx.tables.length); });
        i0.ɵɵtext(2, "Add table");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵlistener("click", function TableStickyComplexExample_Template_button_click_3_listener() { return ctx.tables.pop(); });
        i0.ɵɵtext(4, "Remove table");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div");
        i0.ɵɵtext(6, " Sticky Headers: ");
        i0.ɵɵelementStart(7, "mat-button-toggle-group", 1, 2);
        i0.ɵɵelementStart(9, "mat-button-toggle", 3);
        i0.ɵɵtext(10, " Row 1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-button-toggle", 4);
        i0.ɵɵtext(12, " Row 2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "div");
        i0.ɵɵtext(14, " Sticky Footers: ");
        i0.ɵɵelementStart(15, "mat-button-toggle-group", 1, 5);
        i0.ɵɵelementStart(17, "mat-button-toggle", 6);
        i0.ɵɵtext(18, " Row 1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mat-button-toggle", 7);
        i0.ɵɵtext(20, " Row 2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵtext(22, " Sticky Columns: ");
        i0.ɵɵelementStart(23, "mat-button-toggle-group", 1, 8);
        i0.ɵɵelementStart(25, "mat-button-toggle", 9);
        i0.ɵɵtext(26, " Position ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "mat-button-toggle", 10);
        i0.ɵɵtext(28, " Name ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "mat-button-toggle", 11);
        i0.ɵɵtext(30, " Weight ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(31, "mat-button-toggle", 12);
        i0.ɵɵtext(32, " Symbol ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(33, "div", 13);
        i0.ɵɵtemplate(34, TableStickyComplexExample_table_34_Template, 26, 14, "table", 14);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("value", i0.ɵɵpureFunction0(4, _c0$1));
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("value", i0.ɵɵpureFunction0(5, _c1$1));
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("value", i0.ɵɵpureFunction0(6, _c2));
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("ngForOf", ctx.tables);
    } }, directives: [i1$1.MatButton, i2$4.MatButtonToggleGroup, i2$4.MatButtonToggle, i2.NgForOf, i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%] {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-column-filler[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%], .mat-cell[_ngcontent-%COMP%] {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-table-sticky-border-elem-top[_ngcontent-%COMP%] {\n  border-bottom: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-right[_ngcontent-%COMP%] {\n  border-left: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-bottom[_ngcontent-%COMP%] {\n  border-top: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-left[_ngcontent-%COMP%] {\n  border-right: 2px solid midnightblue;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableStickyComplexExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-complex-example',
                styleUrls: ['table-sticky-complex-example.css'],
                templateUrl: 'table-sticky-complex-example.html',
            }]
    }], function () { return []; }, null); })();
const ELEMENT_DATA$c = [
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
];

function TableStickyFooterExample_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Item ");
    i0.ɵɵelementEnd();
} }
function TableStickyFooterExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", transaction_r9.item, " ");
} }
function TableStickyFooterExample_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1, " Total ");
    i0.ɵɵelementEnd();
} }
function TableStickyFooterExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Cost ");
    i0.ɵɵelementEnd();
} }
function TableStickyFooterExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r10.cost), " ");
} }
function TableStickyFooterExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r5.getTotalCost()), " ");
} }
function TableStickyFooterExample_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableStickyFooterExample_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableStickyFooterExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
/**
 * @title Table with a sticky footer
 */
class TableStickyFooterExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    getTotalCost() {
        return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
    }
}
TableStickyFooterExample.ɵfac = function TableStickyFooterExample_Factory(t) { return new (t || TableStickyFooterExample)(); };
TableStickyFooterExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableStickyFooterExample, selectors: [["table-sticky-footer-example"]], decls: 13, vars: 5, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableStickyFooterExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TableStickyFooterExample_th_3_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(4, TableStickyFooterExample_td_4_Template, 2, 1, "td", 4);
        i0.ɵɵtemplate(5, TableStickyFooterExample_td_5_Template, 2, 0, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(6, 6);
        i0.ɵɵtemplate(7, TableStickyFooterExample_th_7_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(8, TableStickyFooterExample_td_8_Template, 3, 3, "td", 4);
        i0.ɵɵtemplate(9, TableStickyFooterExample_td_9_Template, 3, 3, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(10, TableStickyFooterExample_tr_10_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(11, TableStickyFooterExample_tr_11_Template, 1, 0, "tr", 8);
        i0.ɵɵtemplate(12, TableStickyFooterExample_tr_12_Template, 1, 0, "tr", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.transactions);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns)("matFooterRowDefSticky", true);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 270px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%] {\n  border-top: 1px solid #e0e0e0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableStickyFooterExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-footer-example',
                styleUrls: ['table-sticky-footer-example.css'],
                templateUrl: 'table-sticky-footer-example.html',
            }]
    }], null, null); })();

function TableStickyHeaderExample_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function TableStickyHeaderExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function TableStickyHeaderExample_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function TableStickyHeaderExample_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function TableStickyHeaderExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
function TableStickyHeaderExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
/**
 * @title Table with sticky header
 */
class TableStickyHeaderExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$b;
    }
}
TableStickyHeaderExample.ɵfac = function TableStickyHeaderExample_Factory(t) { return new (t || TableStickyHeaderExample)(); };
TableStickyHeaderExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableStickyHeaderExample, selectors: [["table-sticky-header-example"]], decls: 16, vars: 4, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableStickyHeaderExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TableStickyHeaderExample_th_3_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(4, TableStickyHeaderExample_td_4_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TableStickyHeaderExample_th_6_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(7, TableStickyHeaderExample_td_7_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(8, 6);
        i0.ɵɵtemplate(9, TableStickyHeaderExample_th_9_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(10, TableStickyHeaderExample_td_10_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(11, 7);
        i0.ɵɵtemplate(12, TableStickyHeaderExample_th_12_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(13, TableStickyHeaderExample_td_13_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(14, TableStickyHeaderExample_tr_14_Template, 1, 0, "tr", 8);
        i0.ɵɵtemplate(15, TableStickyHeaderExample_tr_15_Template, 1, 0, "tr", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableStickyHeaderExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-header-example',
                styleUrls: ['table-sticky-header-example.css'],
                templateUrl: 'table-sticky-header-example.html',
            }]
    }], null, null); })();
const ELEMENT_DATA$b = [
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
];

function TableTextColumnAdvancedExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 7);
} }
function TableTextColumnAdvancedExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 8);
} }
const ELEMENT_DATA$a = [
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
];
/**
 * @title Use of 'mat-text-column' with various configurations of the interface.
 */
class TableTextColumnAdvancedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$a);
        this.decimalPipe = new DecimalPipe('en-US');
        /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
        this.getWeight = (data) => {
            const result = this.decimalPipe.transform(data.weight, '1.0-2');
            return result === null ? '' : result;
        };
    }
}
TableTextColumnAdvancedExample.ɵfac = function TableTextColumnAdvancedExample_Factory(t) { return new (t || TableTextColumnAdvancedExample)(); };
TableTextColumnAdvancedExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableTextColumnAdvancedExample, selectors: [["table-text-column-advanced-example"]], decls: 7, vars: 5, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["name", "position", 3, "headerText"], ["name", "name", "headerText", "Element"], ["name", "weight", 3, "dataAccessor"], ["name", "symbol", "justify", "end"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableTextColumnAdvancedExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelement(1, "mat-text-column", 1);
        i0.ɵɵelement(2, "mat-text-column", 2);
        i0.ɵɵelement(3, "mat-text-column", 3);
        i0.ɵɵelement(4, "mat-text-column", 4);
        i0.ɵɵtemplate(5, TableTextColumnAdvancedExample_tr_5_Template, 1, 0, "tr", 5);
        i0.ɵɵtemplate(6, TableTextColumnAdvancedExample_tr_6_Template, 1, 0, "tr", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("headerText", ctx.headerText);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("dataAccessor", ctx.getWeight);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatTextColumn, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableTextColumnAdvancedExample, [{
        type: Component,
        args: [{
                selector: 'table-text-column-advanced-example',
                styleUrls: ['table-text-column-advanced-example.css'],
                templateUrl: 'table-text-column-advanced-example.html',
            }]
    }], null, null); })();

function TableTextColumnExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 7);
} }
function TableTextColumnExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 8);
} }
const ELEMENT_DATA$9 = [
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
];
/**
 * @title Use of `mat-text-column` which can be used for simple columns that only need to display
 * a text value for the header and cells.
 */
class TableTextColumnExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$9;
    }
}
TableTextColumnExample.ɵfac = function TableTextColumnExample_Factory(t) { return new (t || TableTextColumnExample)(); };
TableTextColumnExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableTextColumnExample, selectors: [["table-text-column-example"]], decls: 7, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["name", "position"], ["name", "name"], ["name", "weight"], ["name", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableTextColumnExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelement(1, "mat-text-column", 1);
        i0.ɵɵelement(2, "mat-text-column", 2);
        i0.ɵɵelement(3, "mat-text-column", 3);
        i0.ɵɵelement(4, "mat-text-column", 4);
        i0.ɵɵtemplate(5, TableTextColumnExample_tr_5_Template, 1, 0, "tr", 5);
        i0.ɵɵtemplate(6, TableTextColumnExample_tr_6_Template, 1, 0, "tr", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatTextColumn, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableTextColumnExample, [{
        type: Component,
        args: [{
                selector: 'table-text-column-example',
                styleUrls: ['table-text-column-example.css'],
                templateUrl: 'table-text-column-example.html',
            }]
    }], null, null); })();

const _c0 = ["sort"];
function TableWrappedExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableWrappedExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r6.name, " ");
} }
function TableWrappedExample_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 11);
} }
function TableWrappedExample_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
function TableWrappedExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 13);
    i0.ɵɵelementStart(1, "td", 14);
    i0.ɵɵtext(2, "No data");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function WrapperTable_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function WrapperTable_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r6.position, " ");
} }
function WrapperTable_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function WrapperTable_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r7.weight, " ");
} }
function WrapperTable_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function WrapperTable_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r8.symbol, " ");
} }
const _c1 = ["*"];
const ELEMENT_DATA$8 = [
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
];
/**
 * @title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
class TableWrappedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA$8);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    clearTable() {
        this.dataSource.data = [];
    }
    addData() {
        this.dataSource.data = ELEMENT_DATA$8;
    }
}
TableWrappedExample.ɵfac = function TableWrappedExample_Factory(t) { return new (t || TableWrappedExample)(); };
TableWrappedExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableWrappedExample, selectors: [["table-wrapped-example"]], viewQuery: function TableWrappedExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 13, vars: 4, consts: [["mat-raised-button", "", 3, "click"], ["matSort", "", 3, "dataSource", "columns"], ["sort", "matSort"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function TableWrappedExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function TableWrappedExample_Template_button_click_1_listener() { return ctx.clearTable(); });
        i0.ɵɵtext(2, "Clear table");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵlistener("click", function TableWrappedExample_Template_button_click_3_listener() { return ctx.addData(); });
        i0.ɵɵtext(4, "Add data");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "wrapper-table", 1, 2);
        i0.ɵɵelementContainerStart(7, 3);
        i0.ɵɵtemplate(8, TableWrappedExample_th_8_Template, 2, 0, "th", 4);
        i0.ɵɵtemplate(9, TableWrappedExample_td_9_Template, 2, 1, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(10, TableWrappedExample_tr_10_Template, 1, 0, "tr", 6);
        i0.ɵɵtemplate(11, TableWrappedExample_tr_11_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(12, TableWrappedExample_tr_12_Template, 3, 0, "tr", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("dataSource", ctx.dataSource)("columns", ctx.displayedColumns);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: function () { return [i1$1.MatButton, WrapperTable, i4.MatSort, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatNoDataRow, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow]; }, styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 0 8px 8px 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableWrappedExample, [{
        type: Component,
        args: [{
                selector: 'table-wrapped-example',
                styleUrls: ['table-wrapped-example.css'],
                templateUrl: 'table-wrapped-example.html',
            }]
    }], null, { sort: [{
            type: ViewChild,
            args: ['sort']
        }] }); })();
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
class WrapperTable {
    ngAfterContentInit() {
        this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
        this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
        this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
        this.table.setNoDataRow(this.noDataRow);
    }
}
WrapperTable.ɵfac = function WrapperTable_Factory(t) { return new (t || WrapperTable)(); };
WrapperTable.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: WrapperTable, selectors: [["wrapper-table"]], contentQueries: function WrapperTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, MatNoDataRow, 5);
        i0.ɵɵcontentQuery(dirIndex, MatHeaderRowDef, 4);
        i0.ɵɵcontentQuery(dirIndex, MatRowDef, 4);
        i0.ɵɵcontentQuery(dirIndex, MatColumnDef, 4);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.noDataRow = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerRowDefs = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rowDefs = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnDefs = _t);
    } }, viewQuery: function WrapperTable_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatTable, 7);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
    } }, inputs: { columns: "columns", dataSource: "dataSource" }, ngContentSelectors: _c1, decls: 11, vars: 1, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""]], template: function WrapperTable_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementContainerStart(2, 1);
        i0.ɵɵtemplate(3, WrapperTable_th_3_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(4, WrapperTable_td_4_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 4);
        i0.ɵɵtemplate(6, WrapperTable_th_6_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(7, WrapperTable_td_7_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(8, 5);
        i0.ɵɵtemplate(9, WrapperTable_th_9_Template, 2, 0, "th", 6);
        i0.ɵɵtemplate(10, WrapperTable_td_10_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderCell, i4.MatSortHeader, i1.MatCell], styles: ["table[_ngcontent-%COMP%] {\n      width: 100%;\n    }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WrapperTable, [{
        type: Component,
        args: [{
                selector: 'wrapper-table',
                templateUrl: 'wrapper-table.html',
                styles: [`
    table {
      width: 100%;
    }
  `]
            }]
    }], null, { headerRowDefs: [{
            type: ContentChildren,
            args: [MatHeaderRowDef]
        }], rowDefs: [{
            type: ContentChildren,
            args: [MatRowDef]
        }], columnDefs: [{
            type: ContentChildren,
            args: [MatColumnDef]
        }], noDataRow: [{
            type: ContentChild,
            args: [MatNoDataRow]
        }], table: [{
            type: ViewChild,
            args: [MatTable, { static: true }]
        }], columns: [{
            type: Input
        }], dataSource: [{
            type: Input
        }] }); })();

function TableReorderableExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableReorderableExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function TableReorderableExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableReorderableExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function TableReorderableExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableReorderableExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function TableReorderableExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableReorderableExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function TableReorderableExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 11);
} }
function TableReorderableExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
/**
 * @title Table with re-orderable columns
 */
class TableReorderableExample {
    constructor() {
        this.columns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$7;
    }
    drop(event) {
        moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    }
}
TableReorderableExample.ɵfac = function TableReorderableExample_Factory(t) { return new (t || TableReorderableExample)(); };
TableReorderableExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableReorderableExample, selectors: [["table-reorderable-example"]], decls: 15, vars: 3, consts: [["mat-table", "", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "dataSource", "cdkDropListDropped"], ["matColumnDef", "position"], ["mat-header-cell", "", "cdkDrag", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "cdkDrag", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableReorderableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵlistener("cdkDropListDropped", function TableReorderableExample_Template_table_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableReorderableExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableReorderableExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableReorderableExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableReorderableExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableReorderableExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableReorderableExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableReorderableExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableReorderableExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, TableReorderableExample_tr_13_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(14, TableReorderableExample_tr_14_Template, 1, 0, "tr", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.columns);
    } }, directives: [i1.MatTable, i2$5.CdkDropList, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i2$5.CdkDrag, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableReorderableExample, [{
        type: Component,
        args: [{
                selector: 'table-reorderable-example',
                templateUrl: './table-reorderable-example.html',
                styleUrls: ['./table-reorderable-example.css']
            }]
    }], null, null); })();
const ELEMENT_DATA$7 = [
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
];

function TableRecycleRowsExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableRecycleRowsExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function TableRecycleRowsExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableRecycleRowsExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function TableRecycleRowsExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableRecycleRowsExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function TableRecycleRowsExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableRecycleRowsExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function TableRecycleRowsExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 11);
} }
function TableRecycleRowsExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
const ELEMENT_DATA$6 = [
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
];
/**
 * @title Table that uses the recycle view repeater strategy.
 */
class TableRecycleRowsExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$6;
    }
}
TableRecycleRowsExample.ɵfac = function TableRecycleRowsExample_Factory(t) { return new (t || TableRecycleRowsExample)(); };
TableRecycleRowsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableRecycleRowsExample, selectors: [["table-recycle-rows-example"]], decls: 15, vars: 3, consts: [["mat-table", "", "recycleRows", "", 1, "example-table", "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableRecycleRowsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableRecycleRowsExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableRecycleRowsExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableRecycleRowsExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableRecycleRowsExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableRecycleRowsExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableRecycleRowsExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableRecycleRowsExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableRecycleRowsExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, TableRecycleRowsExample_tr_13_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(14, TableRecycleRowsExample_tr_14_Template, 1, 0, "tr", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatRecycleRows, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableRecycleRowsExample, [{
        type: Component,
        args: [{
                selector: 'table-recycle-rows-example',
                styleUrls: ['table-recycle-rows-example.css'],
                templateUrl: 'table-recycle-rows-example.html',
            }]
    }], null, null); })();

function TableHarnessExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "No.");
    i0.ɵɵelementEnd();
} }
function TableHarnessExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r15.position);
} }
function TableHarnessExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1, "Number of the element");
    i0.ɵɵelementEnd();
} }
function TableHarnessExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Name");
    i0.ɵɵelementEnd();
} }
function TableHarnessExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r16.name);
} }
function TableHarnessExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1, "Name of the element");
    i0.ɵɵelementEnd();
} }
function TableHarnessExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Weight");
    i0.ɵɵelementEnd();
} }
function TableHarnessExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r17.weight);
} }
function TableHarnessExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1, "Weight of the element");
    i0.ɵɵelementEnd();
} }
function TableHarnessExample_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Symbol");
    i0.ɵɵelementEnd();
} }
function TableHarnessExample_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r18.symbol);
} }
function TableHarnessExample_td_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1, "Symbol of the element");
    i0.ɵɵelementEnd();
} }
function TableHarnessExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableHarnessExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
function TableHarnessExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 16);
} }
/**
 * @title Testing with MatTableHarness
 */
class TableHarnessExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = [
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
        ];
    }
}
TableHarnessExample.ɵfac = function TableHarnessExample_Factory(t) { return new (t || TableHarnessExample)(); };
TableHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableHarnessExample, selectors: [["table-harness-example"]], decls: 20, vars: 4, consts: [["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-footer-row", ""], ["mat-row", ""]], template: function TableHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableHarnessExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableHarnessExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵtemplate(4, TableHarnessExample_td_4_Template, 2, 0, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TableHarnessExample_th_6_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(7, TableHarnessExample_td_7_Template, 2, 1, "td", 3);
        i0.ɵɵtemplate(8, TableHarnessExample_td_8_Template, 2, 0, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 6);
        i0.ɵɵtemplate(10, TableHarnessExample_th_10_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(11, TableHarnessExample_td_11_Template, 2, 1, "td", 3);
        i0.ɵɵtemplate(12, TableHarnessExample_td_12_Template, 2, 0, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 7);
        i0.ɵɵtemplate(14, TableHarnessExample_th_14_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(15, TableHarnessExample_td_15_Template, 2, 1, "td", 3);
        i0.ɵɵtemplate(16, TableHarnessExample_td_16_Template, 2, 0, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(17, TableHarnessExample_tr_17_Template, 1, 0, "tr", 8);
        i0.ɵɵtemplate(18, TableHarnessExample_tr_18_Template, 1, 0, "tr", 9);
        i0.ɵɵtemplate(19, TableHarnessExample_tr_19_Template, 1, 0, "tr", 10);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatFooterRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatFooterRow, i1.MatRow], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableHarnessExample, [{
        type: Component,
        args: [{
                selector: 'table-harness-example',
                templateUrl: 'table-harness-example.html',
            }]
    }], null, null); })();

function TableWithRipplesExample_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell", 6);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableWithRipplesExample_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r4.name, " ");
} }
function TableWithRipplesExample_mat_header_row_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-header-row");
} }
function TableWithRipplesExample_mat_row_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-row", 8);
} }
const ELEMENT_DATA$5 = [
    { name: 'Hydrogen' },
    { name: 'Helium' },
    { name: 'Lithium' },
    { name: 'Beryllium' },
    { name: 'Boron' },
    { name: 'Carbon' },
    { name: 'Nitrogen' },
    { name: 'Oxygen' },
    { name: 'Fluorine' },
    { name: 'Neon' },
];
/**
 * @title Tables with Material Design ripples.
 */
class TableWithRipplesExample {
    constructor() {
        this.displayedColumns = ['name'];
        this.dataSource = ELEMENT_DATA$5;
    }
}
TableWithRipplesExample.ɵfac = function TableWithRipplesExample_Factory(t) { return new (t || TableWithRipplesExample)(); };
TableWithRipplesExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableWithRipplesExample, selectors: [["table-with-ripples-example"]], decls: 6, vars: 3, consts: [[1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["matRipple", ""]], template: function TableWithRipplesExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableWithRipplesExample_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 2);
        i0.ɵɵtemplate(3, TableWithRipplesExample_mat_cell_3_Template, 2, 1, "mat-cell", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(4, TableWithRipplesExample_mat_header_row_4_Template, 1, 0, "mat-header-row", 4);
        i0.ɵɵtemplate(5, TableWithRipplesExample_mat_row_5_Template, 1, 0, "mat-row", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow, i2$6.MatRipple], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableWithRipplesExample, [{
        type: Component,
        args: [{
                selector: 'table-with-ripples-example',
                styleUrls: ['table-with-ripples-example.css'],
                templateUrl: 'table-with-ripples-example.html',
            }]
    }], null, null); })();

function TableColumnStylingExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableColumnStylingExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function TableColumnStylingExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableColumnStylingExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function TableColumnStylingExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableColumnStylingExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function TableColumnStylingExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableColumnStylingExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function TableColumnStylingExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 11);
} }
function TableColumnStylingExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
const ELEMENT_DATA$4 = [
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
];
/**
 * @title Styling columns using their auto-generated column names
 */
class TableColumnStylingExample {
    constructor() {
        this.displayedColumns = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol'];
        this.dataSource = ELEMENT_DATA$4;
    }
}
TableColumnStylingExample.ɵfac = function TableColumnStylingExample_Factory(t) { return new (t || TableColumnStylingExample)(); };
TableColumnStylingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableColumnStylingExample, selectors: [["table-column-styling-example"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], ["matColumnDef", "demo-position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "demo-name"], ["matColumnDef", "demo-weight"], ["matColumnDef", "demo-symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableColumnStylingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableColumnStylingExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableColumnStylingExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableColumnStylingExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableColumnStylingExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableColumnStylingExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableColumnStylingExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableColumnStylingExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableColumnStylingExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, TableColumnStylingExample_tr_13_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(14, TableColumnStylingExample_tr_14_Template, 1, 0, "tr", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-column-demo-position[_ngcontent-%COMP%] {\n  width: 32px;\n  border-right: 1px solid currentColor;\n  padding-right: 24px;\n  text-align: center;\n}\n\n.mat-column-demo-name[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  font-size: 20px;\n}\n\n.mat-column-demo-weight[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.mat-column-demo-symbol[_ngcontent-%COMP%] {\n  width: 32px;\n  text-align: center;\n  font-weight: bold;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableColumnStylingExample, [{
        type: Component,
        args: [{
                selector: 'table-column-styling-example',
                styleUrls: ['table-column-styling-example.css'],
                templateUrl: 'table-column-styling-example.html',
            }]
    }], null, null); })();

function TableRowBindingExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "No.");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r12.position);
} }
function TableRowBindingExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Name");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r13.name);
} }
function TableRowBindingExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Weight");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r14.weight);
} }
function TableRowBindingExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Symbol");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r15.symbol);
} }
function TableRowBindingExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableRowBindingExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 14);
    i0.ɵɵlistener("click", function TableRowBindingExample_tr_14_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r18); const row_r16 = restoredCtx.$implicit; const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.clickedRows.add(row_r16); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("demo-row-is-clicked", ctx_r9.clickedRows.has(row_r16));
} }
function TableRowBindingExample_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Clicked rows will be logged here\n");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_li_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const clickedRow_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Clicked on ", clickedRow_r19.name, " ");
} }
const ELEMENT_DATA$3 = [
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
];
/**
 * @title Binding event handlers and properties to the table rows.
 */
class TableRowBindingExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA$3;
        this.clickedRows = new Set();
    }
}
TableRowBindingExample.ɵfac = function TableRowBindingExample_Factory(t) { return new (t || TableRowBindingExample)(); };
TableRowBindingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableRowBindingExample, selectors: [["table-row-binding-example"]], decls: 21, vars: 5, consts: [["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "demo-row-is-clicked", "click", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function TableRowBindingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableRowBindingExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableRowBindingExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableRowBindingExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableRowBindingExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableRowBindingExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableRowBindingExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableRowBindingExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableRowBindingExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, TableRowBindingExample_tr_13_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(14, TableRowBindingExample_tr_14_Template, 1, 2, "tr", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div");
        i0.ɵɵelementStart(16, "h3");
        i0.ɵɵtext(17, " Click Log ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(18, TableRowBindingExample_div_18_Template, 2, 0, "div", 9);
        i0.ɵɵelementStart(19, "ul");
        i0.ɵɵtemplate(20, TableRowBindingExample_li_20_Template, 2, 1, "li", 10);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !ctx.clickedRows.size);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.clickedRows);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i2.NgIf, i2.NgForOf, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n  border-top: 1px solid transparent;\n  cursor: pointer;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%] {\n  border-color: currentColor;\n}\n\n.demo-row-is-clicked[_ngcontent-%COMP%] {\n  font-weight: bold;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableRowBindingExample, [{
        type: Component,
        args: [{
                selector: 'table-row-binding-example',
                styleUrls: ['table-row-binding-example.css'],
                templateUrl: 'table-row-binding-example.html',
            }]
    }], null, null); })();

function TableDynamicArrayDataExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "No.");
    i0.ɵɵelementEnd();
} }
function TableDynamicArrayDataExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r10.position);
} }
function TableDynamicArrayDataExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Name");
    i0.ɵɵelementEnd();
} }
function TableDynamicArrayDataExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r11.name);
} }
function TableDynamicArrayDataExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Weight");
    i0.ɵɵelementEnd();
} }
function TableDynamicArrayDataExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r12.weight);
} }
function TableDynamicArrayDataExample_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Symbol");
    i0.ɵɵelementEnd();
} }
function TableDynamicArrayDataExample_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r13.symbol);
} }
function TableDynamicArrayDataExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableDynamicArrayDataExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
const ELEMENT_DATA$2 = [
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
];
/**
 * @title Adding and removing data when using an array-based datasource.
 */
class TableDynamicArrayDataExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = [...ELEMENT_DATA$2];
    }
    addData() {
        const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA$2.length);
        this.dataSource.push(ELEMENT_DATA$2[randomElementIndex]);
        this.table.renderRows();
    }
    removeData() {
        this.dataSource.pop();
        this.table.renderRows();
    }
}
TableDynamicArrayDataExample.ɵfac = function TableDynamicArrayDataExample_Factory(t) { return new (t || TableDynamicArrayDataExample)(); };
TableDynamicArrayDataExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableDynamicArrayDataExample, selectors: [["table-dynamic-array-data-example"]], viewQuery: function TableDynamicArrayDataExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatTable, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
    } }, decls: 20, vars: 4, consts: [[1, "demo-button-container"], ["mat-raised-button", "", 1, "demo-button", 3, "click"], ["mat-raised-button", "", 1, "demo-button", 3, "disabled", "click"], ["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableDynamicArrayDataExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function TableDynamicArrayDataExample_Template_button_click_1_listener() { return ctx.addData(); });
        i0.ɵɵtext(2, " Add data ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function TableDynamicArrayDataExample_Template_button_click_3_listener() { return ctx.removeData(); });
        i0.ɵɵtext(4, " Remove data ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "table", 3);
        i0.ɵɵelementContainerStart(6, 4);
        i0.ɵɵtemplate(7, TableDynamicArrayDataExample_th_7_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(8, TableDynamicArrayDataExample_td_8_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 7);
        i0.ɵɵtemplate(10, TableDynamicArrayDataExample_th_10_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(11, TableDynamicArrayDataExample_td_11_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 8);
        i0.ɵɵtemplate(13, TableDynamicArrayDataExample_th_13_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(14, TableDynamicArrayDataExample_td_14_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(15, 9);
        i0.ɵɵtemplate(16, TableDynamicArrayDataExample_th_16_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(17, TableDynamicArrayDataExample_td_17_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(18, TableDynamicArrayDataExample_tr_18_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(19, TableDynamicArrayDataExample_tr_19_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", !ctx.dataSource.length);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1$1.MatButton, i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.demo-button-container[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n\n.demo-button[_ngcontent-%COMP%]    + .demo-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableDynamicArrayDataExample, [{
        type: Component,
        args: [{
                selector: 'table-dynamic-array-data-example',
                styleUrls: ['table-dynamic-array-data-example.css'],
                templateUrl: 'table-dynamic-array-data-example.html',
            }]
    }], null, { table: [{
            type: ViewChild,
            args: [MatTable]
        }] }); })();

function TableDynamicObservableDataExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "No.");
    i0.ɵɵelementEnd();
} }
function TableDynamicObservableDataExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r10.position);
} }
function TableDynamicObservableDataExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Name");
    i0.ɵɵelementEnd();
} }
function TableDynamicObservableDataExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r11.name);
} }
function TableDynamicObservableDataExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Weight");
    i0.ɵɵelementEnd();
} }
function TableDynamicObservableDataExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r12.weight);
} }
function TableDynamicObservableDataExample_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Symbol");
    i0.ɵɵelementEnd();
} }
function TableDynamicObservableDataExample_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r13.symbol);
} }
function TableDynamicObservableDataExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableDynamicObservableDataExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
const ELEMENT_DATA$1 = [
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
];
/**
 * @title Adding and removing data when using an observable-based datasource.
 */
class TableDynamicObservableDataExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataToDisplay = [...ELEMENT_DATA$1];
        this.dataSource = new ExampleDataSource(this.dataToDisplay);
    }
    addData() {
        const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA$1.length);
        this.dataToDisplay = [
            ...this.dataToDisplay,
            ELEMENT_DATA$1[randomElementIndex]
        ];
        this.dataSource.setData(this.dataToDisplay);
    }
    removeData() {
        this.dataToDisplay = this.dataToDisplay.slice(0, -1);
        this.dataSource.setData(this.dataToDisplay);
    }
}
TableDynamicObservableDataExample.ɵfac = function TableDynamicObservableDataExample_Factory(t) { return new (t || TableDynamicObservableDataExample)(); };
TableDynamicObservableDataExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableDynamicObservableDataExample, selectors: [["table-dynamic-observable-data-example"]], decls: 20, vars: 4, consts: [[1, "demo-button-container"], ["mat-raised-button", "", 1, "demo-button", 3, "click"], ["mat-raised-button", "", 1, "demo-button", 3, "disabled", "click"], ["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableDynamicObservableDataExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function TableDynamicObservableDataExample_Template_button_click_1_listener() { return ctx.addData(); });
        i0.ɵɵtext(2, " Add data ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function TableDynamicObservableDataExample_Template_button_click_3_listener() { return ctx.removeData(); });
        i0.ɵɵtext(4, " Remove data ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "table", 3);
        i0.ɵɵelementContainerStart(6, 4);
        i0.ɵɵtemplate(7, TableDynamicObservableDataExample_th_7_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(8, TableDynamicObservableDataExample_td_8_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 7);
        i0.ɵɵtemplate(10, TableDynamicObservableDataExample_th_10_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(11, TableDynamicObservableDataExample_td_11_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 8);
        i0.ɵɵtemplate(13, TableDynamicObservableDataExample_th_13_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(14, TableDynamicObservableDataExample_td_14_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(15, 9);
        i0.ɵɵtemplate(16, TableDynamicObservableDataExample_th_16_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(17, TableDynamicObservableDataExample_td_17_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(18, TableDynamicObservableDataExample_tr_18_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(19, TableDynamicObservableDataExample_tr_19_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", !ctx.dataToDisplay.length);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1$1.MatButton, i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.demo-button-container[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n\n.demo-button[_ngcontent-%COMP%]    + .demo-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableDynamicObservableDataExample, [{
        type: Component,
        args: [{
                selector: 'table-dynamic-observable-data-example',
                styleUrls: ['table-dynamic-observable-data-example.css'],
                templateUrl: 'table-dynamic-observable-data-example.html',
            }]
    }], null, null); })();
class ExampleDataSource extends DataSource {
    constructor(initialData) {
        super();
        this._dataStream = new ReplaySubject();
        this.setData(initialData);
    }
    connect() {
        return this._dataStream;
    }
    disconnect() { }
    setData(data) {
        this._dataStream.next(data);
    }
}

function TableGeneratedColumnsExample_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r3.header, " ");
} }
function TableGeneratedColumnsExample_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const column_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r3.cell(row_r7), " ");
} }
function TableGeneratedColumnsExample_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 4);
    i0.ɵɵtemplate(1, TableGeneratedColumnsExample_ng_container_1_th_1_Template, 2, 1, "th", 5);
    i0.ɵɵtemplate(2, TableGeneratedColumnsExample_ng_container_1_td_2_Template, 2, 1, "td", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    i0.ɵɵproperty("matColumnDef", column_r3.columnDef);
} }
function TableGeneratedColumnsExample_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 9);
} }
function TableGeneratedColumnsExample_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 10);
} }
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
];
/**
 * @title Table with columns defined using ngFor instead of statically written in the template.
 */
class TableGeneratedColumnsExample {
    constructor() {
        this.columns = [
            {
                columnDef: 'position',
                header: 'No.',
                cell: (element) => `${element.position}`
            },
            {
                columnDef: 'name',
                header: 'Name',
                cell: (element) => `${element.name}`
            },
            {
                columnDef: 'weight',
                header: 'Weight',
                cell: (element) => `${element.weight}`
            },
            {
                columnDef: 'symbol',
                header: 'Symbol',
                cell: (element) => `${element.symbol}`
            }
        ];
        this.dataSource = ELEMENT_DATA;
        this.displayedColumns = this.columns.map(c => c.columnDef);
    }
}
TableGeneratedColumnsExample.ɵfac = function TableGeneratedColumnsExample_Factory(t) { return new (t || TableGeneratedColumnsExample)(); };
TableGeneratedColumnsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableGeneratedColumnsExample, selectors: [["table-generated-columns-example"]], decls: 4, vars: 4, consts: [["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableGeneratedColumnsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, TableGeneratedColumnsExample_ng_container_1_Template, 3, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, TableGeneratedColumnsExample_tr_2_Template, 1, 0, "tr", 2);
        i0.ɵɵtemplate(3, TableGeneratedColumnsExample_tr_3_Template, 1, 0, "tr", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i2.NgForOf, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableGeneratedColumnsExample, [{
        type: Component,
        args: [{
                selector: 'table-generated-columns-example',
                styleUrls: ['table-generated-columns-example.css'],
                templateUrl: 'table-generated-columns-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    TableBasicExample,
    TableColumnStylingExample,
    TableDynamicArrayDataExample,
    TableDynamicColumnsExample,
    TableDynamicObservableDataExample,
    TableExpandableRowsExample,
    TableFilteringExample,
    TableFlexBasicExample,
    TableFooterRowExample,
    TableGeneratedColumnsExample,
    TableHarnessExample,
    TableHttpExample,
    TableMultipleHeaderFooterExample,
    TableOverviewExample,
    TablePaginationExample,
    TableRecycleRowsExample,
    TableReorderableExample,
    TableRowBindingExample,
    TableRowContextExample,
    TableSelectionExample,
    TableSortingExample,
    TableStickyColumnsExample,
    TableStickyComplexExample,
    TableStickyComplexFlexExample,
    TableStickyFooterExample,
    TableStickyHeaderExample,
    TableTextColumnAdvancedExample,
    TableTextColumnExample,
    TableWithRipplesExample,
    TableWrappedExample,
    WrapperTable,
];
class TableExamplesModule {
}
TableExamplesModule.ɵfac = function TableExamplesModule_Factory(t) { return new (t || TableExamplesModule)(); };
TableExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TableExamplesModule });
TableExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatPaginatorModule,
            MatProgressSpinnerModule,
            MatRippleModule,
            MatSortModule,
            MatTableModule,
            CdkTableModule,
            DragDropModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatPaginatorModule,
                    MatProgressSpinnerModule,
                    MatRippleModule,
                    MatSortModule,
                    MatTableModule,
                    CdkTableModule,
                    DragDropModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TableExamplesModule, { declarations: [TableBasicExample,
        TableColumnStylingExample,
        TableDynamicArrayDataExample,
        TableDynamicColumnsExample,
        TableDynamicObservableDataExample,
        TableExpandableRowsExample,
        TableFilteringExample,
        TableFlexBasicExample,
        TableFooterRowExample,
        TableGeneratedColumnsExample,
        TableHarnessExample,
        TableHttpExample,
        TableMultipleHeaderFooterExample,
        TableOverviewExample,
        TablePaginationExample,
        TableRecycleRowsExample,
        TableReorderableExample,
        TableRowBindingExample,
        TableRowContextExample,
        TableSelectionExample,
        TableSortingExample,
        TableStickyColumnsExample,
        TableStickyComplexExample,
        TableStickyComplexFlexExample,
        TableStickyFooterExample,
        TableStickyHeaderExample,
        TableTextColumnAdvancedExample,
        TableTextColumnExample,
        TableWithRipplesExample,
        TableWrappedExample,
        WrapperTable], imports: [CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSortModule,
        MatTableModule,
        CdkTableModule,
        DragDropModule], exports: [TableBasicExample,
        TableColumnStylingExample,
        TableDynamicArrayDataExample,
        TableDynamicColumnsExample,
        TableDynamicObservableDataExample,
        TableExpandableRowsExample,
        TableFilteringExample,
        TableFlexBasicExample,
        TableFooterRowExample,
        TableGeneratedColumnsExample,
        TableHarnessExample,
        TableHttpExample,
        TableMultipleHeaderFooterExample,
        TableOverviewExample,
        TablePaginationExample,
        TableRecycleRowsExample,
        TableReorderableExample,
        TableRowBindingExample,
        TableRowContextExample,
        TableSelectionExample,
        TableSortingExample,
        TableStickyColumnsExample,
        TableStickyComplexExample,
        TableStickyComplexFlexExample,
        TableStickyFooterExample,
        TableStickyHeaderExample,
        TableTextColumnAdvancedExample,
        TableTextColumnExample,
        TableWithRipplesExample,
        TableWrappedExample,
        WrapperTable] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TableBasicExample, TableColumnStylingExample, TableDynamicArrayDataExample, TableDynamicColumnsExample, TableDynamicObservableDataExample, TableExamplesModule, TableExpandableRowsExample, TableFilteringExample, TableFlexBasicExample, TableFooterRowExample, TableGeneratedColumnsExample, TableHarnessExample, TableHttpExample, TableMultipleHeaderFooterExample, TableOverviewExample, TablePaginationExample, TableRecycleRowsExample, TableReorderableExample, TableRowBindingExample, TableRowContextExample, TableSelectionExample, TableSortingExample, TableStickyColumnsExample, TableStickyComplexExample, TableStickyComplexFlexExample, TableStickyFooterExample, TableStickyHeaderExample, TableTextColumnAdvancedExample, TableTextColumnExample, TableWithRipplesExample, TableWrappedExample, WrapperTable };
//# sourceMappingURL=table.js.map
