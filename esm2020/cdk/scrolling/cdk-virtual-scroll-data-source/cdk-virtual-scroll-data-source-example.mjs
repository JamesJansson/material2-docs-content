import { DataSource } from '@angular/cdk/collections';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
/** @title Virtual scroll with a custom data source */
export class CdkVirtualScrollDataSourceExample {
    constructor() {
        this.ds = new MyDataSource();
    }
}
CdkVirtualScrollDataSourceExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkVirtualScrollDataSourceExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkVirtualScrollDataSourceExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: CdkVirtualScrollDataSourceExample, selector: "cdk-virtual-scroll-data-source-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"], components: [{ type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], directives: [{ type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkVirtualScrollDataSourceExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-data-source-example', changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of ds\" class=\"example-item\">{{item || 'Loading...'}}</div>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"] }]
        }] });
export class MyDataSource extends DataSource {
    constructor() {
        super(...arguments);
        this._length = 100000;
        this._pageSize = 100;
        this._cachedData = Array.from({ length: this._length });
        this._fetchedPages = new Set();
        this._dataStream = new BehaviorSubject(this._cachedData);
        this._subscription = new Subscription();
    }
    connect(collectionViewer) {
        this._subscription.add(collectionViewer.viewChange.subscribe(range => {
            const startPage = this._getPageForIndex(range.start);
            const endPage = this._getPageForIndex(range.end - 1);
            for (let i = startPage; i <= endPage; i++) {
                this._fetchPage(i);
            }
        }));
        return this._dataStream;
    }
    disconnect() {
        this._subscription.unsubscribe();
    }
    _getPageForIndex(index) {
        return Math.floor(index / this._pageSize);
    }
    _fetchPage(page) {
        if (this._fetchedPages.has(page)) {
            return;
        }
        this._fetchedPages.add(page);
        // Use `setTimeout` to simulate fetching data from server.
        setTimeout(() => {
            this._cachedData.splice(page * this._pageSize, this._pageSize, ...Array.from({ length: this._pageSize })
                .map((_, i) => `Item #${page * this._pageSize + i}`));
            this._dataStream.next(this._cachedData);
        }, Math.random() * 1000 + 200);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS9jZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlL2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFtQixVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxlQUFlLEVBQWMsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDOzs7QUFFL0Qsc0RBQXNEO0FBT3RELE1BQU0sT0FBTyxpQ0FBaUM7SUFOOUM7UUFPRSxPQUFFLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQUN6Qjs7c0lBRlksaUNBQWlDOzBIQUFqQyxpQ0FBaUMsOEVDWDlDLDRNQUdBO21HRFFhLGlDQUFpQztrQkFON0MsU0FBUzsrQkFDRSx3Q0FBd0MsbUJBR2pDLHVCQUF1QixDQUFDLE1BQU07O0FBTWpELE1BQU0sT0FBTyxZQUFhLFNBQVEsVUFBOEI7SUFBaEU7O1FBQ1UsWUFBTyxHQUFHLE1BQU0sQ0FBQztRQUNqQixjQUFTLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBUyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUN6RCxrQkFBYSxHQUFHLElBQUksR0FBRyxFQUFVLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBeUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVFLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQW1DdEQsQ0FBQztJQWpDQyxPQUFPLENBQUMsZ0JBQWtDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkUsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyRCxLQUFLLElBQUksQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVPLGdCQUFnQixDQUFDLEtBQWE7UUFDcEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLFVBQVUsQ0FBQyxJQUFZO1FBQzdCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDaEMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0IsMERBQTBEO1FBQzFELFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUN6RCxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDO2lCQUNsQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2xsZWN0aW9uVmlld2VyLCBEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb259IGZyb20gJ3J4anMnO1xuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsIHdpdGggYSBjdXN0b20gZGF0YSBzb3VyY2UgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay12aXJ0dWFsLXNjcm9sbC1kYXRhLXNvdXJjZS1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbERhdGFTb3VyY2VFeGFtcGxlIHtcbiAgZHMgPSBuZXcgTXlEYXRhU291cmNlKCk7XG59XG5cbmV4cG9ydCBjbGFzcyBNeURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPHN0cmluZyB8IHVuZGVmaW5lZD4ge1xuICBwcml2YXRlIF9sZW5ndGggPSAxMDAwMDA7XG4gIHByaXZhdGUgX3BhZ2VTaXplID0gMTAwO1xuICBwcml2YXRlIF9jYWNoZWREYXRhID0gQXJyYXkuZnJvbTxzdHJpbmc+KHtsZW5ndGg6IHRoaXMuX2xlbmd0aH0pO1xuICBwcml2YXRlIF9mZXRjaGVkUGFnZXMgPSBuZXcgU2V0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZGF0YVN0cmVhbSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8KHN0cmluZyB8IHVuZGVmaW5lZClbXT4odGhpcy5fY2FjaGVkRGF0YSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX3N1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25uZWN0KGNvbGxlY3Rpb25WaWV3ZXI6IENvbGxlY3Rpb25WaWV3ZXIpOiBPYnNlcnZhYmxlPChzdHJpbmcgfCB1bmRlZmluZWQpW10+IHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24uYWRkKGNvbGxlY3Rpb25WaWV3ZXIudmlld0NoYW5nZS5zdWJzY3JpYmUocmFuZ2UgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRQYWdlID0gdGhpcy5fZ2V0UGFnZUZvckluZGV4KHJhbmdlLnN0YXJ0KTtcbiAgICAgIGNvbnN0IGVuZFBhZ2UgPSB0aGlzLl9nZXRQYWdlRm9ySW5kZXgocmFuZ2UuZW5kIC0gMSk7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRQYWdlOyBpIDw9IGVuZFBhZ2U7IGkrKykge1xuICAgICAgICB0aGlzLl9mZXRjaFBhZ2UoaSk7XG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybiB0aGlzLl9kYXRhU3RyZWFtO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFBhZ2VGb3JJbmRleChpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihpbmRleCAvIHRoaXMuX3BhZ2VTaXplKTtcbiAgfVxuXG4gIHByaXZhdGUgX2ZldGNoUGFnZShwYWdlOiBudW1iZXIpIHtcbiAgICBpZiAodGhpcy5fZmV0Y2hlZFBhZ2VzLmhhcyhwYWdlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9mZXRjaGVkUGFnZXMuYWRkKHBhZ2UpO1xuXG4gICAgLy8gVXNlIGBzZXRUaW1lb3V0YCB0byBzaW11bGF0ZSBmZXRjaGluZyBkYXRhIGZyb20gc2VydmVyLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fY2FjaGVkRGF0YS5zcGxpY2UocGFnZSAqIHRoaXMuX3BhZ2VTaXplLCB0aGlzLl9wYWdlU2l6ZSxcbiAgICAgICAgICAuLi5BcnJheS5mcm9tKHtsZW5ndGg6IHRoaXMuX3BhZ2VTaXplfSlcbiAgICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gYEl0ZW0gIyR7cGFnZSAqIHRoaXMuX3BhZ2VTaXplICsgaX1gKSk7XG4gICAgICB0aGlzLl9kYXRhU3RyZWFtLm5leHQodGhpcy5fY2FjaGVkRGF0YSk7XG4gICAgfSwgTWF0aC5yYW5kb20oKSAqIDEwMDAgKyAyMDApO1xuICB9XG59XG4iLCI8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IGl0ZW1TaXplPVwiNTBcIiBjbGFzcz1cImV4YW1wbGUtdmlld3BvcnRcIj5cbiAgPGRpdiAqY2RrVmlydHVhbEZvcj1cImxldCBpdGVtIG9mIGRzXCIgY2xhc3M9XCJleGFtcGxlLWl0ZW1cIj57e2l0ZW0gfHwgJ0xvYWRpbmcuLi4nfX08L2Rpdj5cbjwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuIl19