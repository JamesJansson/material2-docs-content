import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sort";
import * as i2 from "@angular/common";
/**
 * @title Testing with MatSortHarness
 */
export class SortHarnessExample {
    constructor() {
        this.disableThirdHeader = false;
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
        }
        else {
            this.sortedData = data.sort((a, b) => {
                const aValue = a[sort.active];
                const bValue = b[sort.active];
                return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
            });
        }
    }
}
SortHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SortHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SortHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0", type: SortHarnessExample, selector: "sort-harness-example", ngImport: i0, template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\n    <th mat-sort-header=\"carbs\">Carbs</th>\n    <th mat-sort-header=\"protein\">Protein</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n", components: [{ type: i1.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "mat-sort-header", "arrowPosition", "start", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }], directives: [{ type: i1.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0", ngImport: i0, type: SortHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'sort-harness-example', template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\n    <th mat-sort-header=\"carbs\">Carbs</th>\n    <th mat-sort-header=\"protein\">Protein</th>\n  </tr>\n\n  <tr *ngFor=\"let dessert of sortedData\">\n    <td>{{dessert.name}}</td>\n    <td>{{dessert.calories}}</td>\n    <td>{{dessert.fat}}</td>\n    <td>{{dessert.carbs}}</td>\n    <td>{{dessert.protein}}</td>\n  </tr>\n</table>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L3NvcnQtaGFybmVzcy9zb3J0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1oYXJuZXNzL3NvcnQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUd4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7SUFKL0I7UUFLRSx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFHO1lBQ1QsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDckUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMxRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMvRCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMvRCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztTQUNyRSxDQUFDO1FBRUYsZUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7S0FlcEM7SUFiQyxRQUFRLENBQUMsSUFBVTtRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DLE1BQU0sTUFBTSxHQUFJLENBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sTUFBTSxHQUFJLENBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzsrR0F4QlUsa0JBQWtCO21HQUFsQixrQkFBa0IsNERDVi9CLDRqQkFpQkE7MkZEUGEsa0JBQWtCO2tCQUo5QixTQUFTOytCQUNFLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRTb3J0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb3J0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc29ydC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRIYXJuZXNzRXhhbXBsZSB7XG4gIGRpc2FibGVUaGlyZEhlYWRlciA9IGZhbHNlO1xuICBkZXNzZXJ0cyA9IFtcbiAgICB7bmFtZTogJ0Zyb3plbiB5b2d1cnQnLCBjYWxvcmllczogMTU5LCBmYXQ6IDYsIGNhcmJzOiAyNCwgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdJY2UgY3JlYW0gc2FuZHdpY2gnLCBjYWxvcmllczogMjM3LCBmYXQ6IDksIGNhcmJzOiAzNywgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdFY2xhaXInLCBjYWxvcmllczogMjYyLCBmYXQ6IDE2LCBjYXJiczogMjQsIHByb3RlaW46IDZ9LFxuICAgIHtuYW1lOiAnQ3VwY2FrZScsIGNhbG9yaWVzOiAzMDUsIGZhdDogNCwgY2FyYnM6IDY3LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0dpbmdlcmJyZWFkJywgY2Fsb3JpZXM6IDM1NiwgZmF0OiAxNiwgY2FyYnM6IDQ5LCBwcm90ZWluOiA0fSxcbiAgXTtcblxuICBzb3J0ZWREYXRhID0gdGhpcy5kZXNzZXJ0cy5zbGljZSgpO1xuXG4gIHNvcnREYXRhKHNvcnQ6IFNvcnQpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kZXNzZXJ0cy5zbGljZSgpO1xuXG4gICAgaWYgKCFzb3J0LmFjdGl2ZSB8fCBzb3J0LmRpcmVjdGlvbiA9PT0gJycpIHtcbiAgICAgIHRoaXMuc29ydGVkRGF0YSA9IGRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc29ydGVkRGF0YSA9IGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBjb25zdCBhVmFsdWUgPSAoYSBhcyBhbnkpW3NvcnQuYWN0aXZlXTtcbiAgICAgICAgY29uc3QgYlZhbHVlID0gKGIgYXMgYW55KVtzb3J0LmFjdGl2ZV07XG4gICAgICAgIHJldHVybiAoYVZhbHVlIDwgYlZhbHVlID8gLTEgOiAxKSAqIChzb3J0LmRpcmVjdGlvbiA9PT0gJ2FzYycgPyAxIDogLTEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCI8dGFibGUgbWF0U29ydCAobWF0U29ydENoYW5nZSk9XCJzb3J0RGF0YSgkZXZlbnQpXCI+XG4gIDx0cj5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwibmFtZVwiPkRlc3NlcnQ8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJjYWxvcmllc1wiPkNhbG9yaWVzPC90aD5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwiZmF0XCIgW2Rpc2FibGVkXT1cImRpc2FibGVUaGlyZEhlYWRlclwiPkZhdDwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cImNhcmJzXCI+Q2FyYnM8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJwcm90ZWluXCI+UHJvdGVpbjwvdGg+XG4gIDwvdHI+XG5cbiAgPHRyICpuZ0Zvcj1cImxldCBkZXNzZXJ0IG9mIHNvcnRlZERhdGFcIj5cbiAgICA8dGQ+e3tkZXNzZXJ0Lm5hbWV9fTwvdGQ+XG4gICAgPHRkPnt7ZGVzc2VydC5jYWxvcmllc319PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LmZhdH19PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LmNhcmJzfX08L3RkPlxuICAgIDx0ZD57e2Rlc3NlcnQucHJvdGVpbn19PC90ZD5cbiAgPC90cj5cbjwvdGFibGU+XG4iXX0=