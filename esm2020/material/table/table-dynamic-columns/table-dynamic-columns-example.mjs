import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/table";
import * as i3 from "@angular/common";
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
 * @title Table dynamically changing the columns displayed
 */
export class TableDynamicColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.displayedColumns.slice();
        this.data = ELEMENT_DATA;
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
TableDynamicColumnsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TableDynamicColumnsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableDynamicColumnsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: TableDynamicColumnsExample, selector: "table-dynamic-columns-example", ngImport: i0, template: "<button mat-raised-button (click)=\"addColumn()\"> Add column </button>\n<button mat-raised-button (click)=\"removeColumn()\"> Remove column </button>\n<button mat-raised-button (click)=\"shuffle()\"> Shuffle </button>\n\n<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 16px 8px;\n}\n"], components: [{ type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i2.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i2.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }], directives: [{ type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i2.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i2.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i2.MatCellDef, selector: "[matCellDef]" }, { type: i2.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i2.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i2.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: TableDynamicColumnsExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-dynamic-columns-example', template: "<button mat-raised-button (click)=\"addColumn()\"> Add column </button>\n<button mat-raised-button (click)=\"removeColumn()\"> Remove column </button>\n<button mat-raised-button (click)=\"shuffle()\"> Shuffle </button>\n\n<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 16px 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1keW5hbWljLWNvbHVtbnMvdGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1keW5hbWljLWNvbHVtbnMvdGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQVN4QyxNQUFNLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzVELENBQUM7QUFFRjs7R0FFRztBQU1ILE1BQU0sT0FBTywwQkFBMEI7SUFMdkM7UUFNRSxxQkFBZ0IsR0FBYSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3RFLHFCQUFnQixHQUFhLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzRCxTQUFJLEdBQXNCLFlBQVksQ0FBQztLQXlCeEM7SUF2QkMsU0FBUztRQUNQLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUM3QjtJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztRQUNoRCxPQUFPLENBQUMsS0FBSyxZQUFZLEVBQUU7WUFDekIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUM7WUFDM0QsWUFBWSxJQUFJLENBQUMsQ0FBQztZQUVsQixPQUFPO1lBQ1AsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMzQztJQUNILENBQUM7O3VIQTNCVSwwQkFBMEI7MkdBQTFCLDBCQUEwQixxRUM5QnZDLHlxQkFhQTsyRkRpQmEsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSBkeW5hbWljYWxseSBjaGFuZ2luZyB0aGUgY29sdW1ucyBkaXNwbGF5ZWRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRHluYW1pY0NvbHVtbnNFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCcsICdwb3NpdGlvbiddO1xuICBjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5zbGljZSgpO1xuICBkYXRhOiBQZXJpb2RpY0VsZW1lbnRbXSA9IEVMRU1FTlRfREFUQTtcblxuICBhZGRDb2x1bW4oKSB7XG4gICAgY29uc3QgcmFuZG9tQ29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCk7XG4gICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5LnB1c2godGhpcy5kaXNwbGF5ZWRDb2x1bW5zW3JhbmRvbUNvbHVtbl0pO1xuICB9XG5cbiAgcmVtb3ZlQ29sdW1uKCkge1xuICAgIGlmICh0aGlzLmNvbHVtbnNUb0Rpc3BsYXkubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkucG9wKCk7XG4gICAgfVxuICB9XG5cbiAgc2h1ZmZsZSgpIHtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5jb2x1bW5zVG9EaXNwbGF5Lmxlbmd0aDtcbiAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgIC8vIFN3YXBcbiAgICAgIGxldCB0ZW1wID0gdGhpcy5jb2x1bW5zVG9EaXNwbGF5W2N1cnJlbnRJbmRleF07XG4gICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXlbY3VycmVudEluZGV4XSA9IHRoaXMuY29sdW1uc1RvRGlzcGxheVtyYW5kb21JbmRleF07XG4gICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXlbcmFuZG9tSW5kZXhdID0gdGVtcDtcbiAgICB9XG4gIH1cbn1cbiIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImFkZENvbHVtbigpXCI+IEFkZCBjb2x1bW4gPC9idXR0b24+XG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJyZW1vdmVDb2x1bW4oKVwiPiBSZW1vdmUgY29sdW1uIDwvYnV0dG9uPlxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwic2h1ZmZsZSgpXCI+IFNodWZmbGUgPC9idXR0b24+XG5cbjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8bmctY29udGFpbmVyIFttYXRDb2x1bW5EZWZdPVwiY29sdW1uXCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBkaXNwbGF5ZWRDb2x1bW5zXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tjb2x1bW59fSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFtjb2x1bW5dfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJjb2x1bW5zVG9EaXNwbGF5XCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGNvbHVtbnNUb0Rpc3BsYXk7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=