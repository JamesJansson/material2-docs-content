import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/icon";
import * as i3 from "@angular/material/tree";
const TREE_DATA = [
    {
        name: 'Fruit',
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];
/**
 * @title Tree with nested nodes
 */
export class TreeNestedOverviewExample {
    constructor() {
        this.treeControl = new NestedTreeControl(node => node.children);
        this.dataSource = new MatTreeNestedDataSource();
        this.hasChild = (_, node) => !!node.children && node.children.length > 0;
        this.dataSource.data = TREE_DATA;
    }
}
TreeNestedOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: TreeNestedOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TreeNestedOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: TreeNestedOverviewExample, selector: "tree-nested-overview-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the mat-icon-button width. -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n      <div class=\"mat-tree-node\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'Toggle ' + node.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        {{node.name}}\n      </div>\n      <!-- There is inline padding applied to this div using styles.\n          This padding value depends on the mat-icon-button width.  -->\n      <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\"\n          role=\"group\">\n        <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-tree-node {\n  padding-left: 40px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i3.MatNestedTreeNode, selector: "mat-nested-tree-node", inputs: ["role", "disabled", "tabIndex", "matNestedTreeNode"], exportAs: ["matNestedTreeNode"] }, { kind: "directive", type: i3.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i3.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i3.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i3.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { kind: "directive", type: i3.MatTreeNodeOutlet, selector: "[matTreeNodeOutlet]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: TreeNestedOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-nested-overview-example', template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <!-- There is inline padding applied to this node using styles.\n    This padding value depends on the mat-icon-button width. -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n      {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n      <div class=\"mat-tree-node\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'Toggle ' + node.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        {{node.name}}\n      </div>\n      <!-- There is inline padding applied to this div using styles.\n          This padding value depends on the mat-icon-button width.  -->\n      <div [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\"\n          role=\"group\">\n        <ng-container matTreeNodeOutlet></ng-container>\n    </div>\n  </mat-nested-tree-node>\n</mat-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n/*\n * This padding sets alignment of the nested nodes.\n */\n.example-tree .mat-nested-tree-node div[role=group] {\n  padding-left: 40px;\n}\n\n/*\n * Padding for leaf nodes.\n * Leaf nodes need to have padding so as to align with other non-leaf nodes\n * under the same parent.\n */\n.example-tree div[role=group] > .mat-tree-node {\n  padding-left: 40px;\n}\n"] }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1uZXN0ZWQtb3ZlcnZpZXcvdHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1uZXN0ZWQtb3ZlcnZpZXcvdHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0FBVy9ELE1BQU0sU0FBUyxHQUFlO0lBQzVCO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixRQUFRLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUMsQ0FBQztLQUNyRTtJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQzthQUMzRDtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDO2FBQ2xEO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFRjs7R0FFRztBQU1ILE1BQU0sT0FBTyx5QkFBeUI7SUFJcEM7UUFIQSxnQkFBVyxHQUFHLElBQUksaUJBQWlCLENBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckUsZUFBVSxHQUFHLElBQUksdUJBQXVCLEVBQVksQ0FBQztRQU1yRCxhQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsSUFBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFIcEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7OzZIQU5VLHlCQUF5QjtpSEFBekIseUJBQXlCLG9FQ3pDdEMsNnRDQTBCQTtrR0RlYSx5QkFBeUI7a0JBTHJDLFNBQVM7K0JBQ0UsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXN0ZWRUcmVlQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5cbi8qKlxuICogRm9vZCBkYXRhIHdpdGggbmVzdGVkIHN0cnVjdHVyZS5cbiAqIEVhY2ggbm9kZSBoYXMgYSBuYW1lIGFuZCBhbiBvcHRpb25hbCBsaXN0IG9mIGNoaWxkcmVuLlxuICovXG5pbnRlcmZhY2UgRm9vZE5vZGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogRm9vZE5vZGVbXTtcbn1cblxuY29uc3QgVFJFRV9EQVRBOiBGb29kTm9kZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ0ZydWl0JyxcbiAgICBjaGlsZHJlbjogW3tuYW1lOiAnQXBwbGUnfSwge25hbWU6ICdCYW5hbmEnfSwge25hbWU6ICdGcnVpdCBsb29wcyd9XSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdWZWdldGFibGVzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnR3JlZW4nLFxuICAgICAgICBjaGlsZHJlbjogW3tuYW1lOiAnQnJvY2NvbGknfSwge25hbWU6ICdCcnVzc2VscyBzcHJvdXRzJ31dLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ09yYW5nZScsXG4gICAgICAgIGNoaWxkcmVuOiBbe25hbWU6ICdQdW1wa2lucyd9LCB7bmFtZTogJ0NhcnJvdHMnfV0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggbmVzdGVkIG5vZGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtbmVzdGVkLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RyZWUtbmVzdGVkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUcmVlTmVzdGVkT3ZlcnZpZXdFeGFtcGxlIHtcbiAgdHJlZUNvbnRyb2wgPSBuZXcgTmVzdGVkVHJlZUNvbnRyb2w8Rm9vZE5vZGU+KG5vZGUgPT4gbm9kZS5jaGlsZHJlbik7XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8Rm9vZE5vZGU+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBUUkVFX0RBVEE7XG4gIH1cblxuICBoYXNDaGlsZCA9IChfOiBudW1iZXIsIG5vZGU6IEZvb2ROb2RlKSA9PiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xufVxuIiwiPG1hdC10cmVlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbdHJlZUNvbnRyb2xdPVwidHJlZUNvbnRyb2xcIiBjbGFzcz1cImV4YW1wbGUtdHJlZVwiPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgbGVhZiBub2RlcyAtLT5cbiAgPCEtLSBUaGVyZSBpcyBpbmxpbmUgcGFkZGluZyBhcHBsaWVkIHRvIHRoaXMgbm9kZSB1c2luZyBzdHlsZXMuXG4gICAgVGhpcyBwYWRkaW5nIHZhbHVlIGRlcGVuZHMgb24gdGhlIG1hdC1pY29uLWJ1dHRvbiB3aWR0aC4gLS0+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlXCIgbWF0VHJlZU5vZGVUb2dnbGU+XG4gICAgICB7e25vZGUubmFtZX19XG4gIDwvbWF0LXRyZWUtbm9kZT5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGV4cGFuZGFibGUgbm9kZXMgLS0+XG4gIDxtYXQtbmVzdGVkLXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYXQtdHJlZS1ub2RlXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFRyZWVOb2RlVG9nZ2xlXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9nZ2xlICcgKyBub2RlLm5hbWVcIj5cbiAgICAgICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgICAgICA8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAge3tub2RlLm5hbWV9fVxuICAgICAgPC9kaXY+XG4gICAgICA8IS0tIFRoZXJlIGlzIGlubGluZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhpcyBkaXYgdXNpbmcgc3R5bGVzLlxuICAgICAgICAgIFRoaXMgcGFkZGluZyB2YWx1ZSBkZXBlbmRzIG9uIHRoZSBtYXQtaWNvbi1idXR0b24gd2lkdGguICAtLT5cbiAgICAgIDxkaXYgW2NsYXNzLmV4YW1wbGUtdHJlZS1pbnZpc2libGVdPVwiIXRyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSlcIlxuICAgICAgICAgIHJvbGU9XCJncm91cFwiPlxuICAgICAgICA8bmctY29udGFpbmVyIG1hdFRyZWVOb2RlT3V0bGV0PjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L21hdC1uZXN0ZWQtdHJlZS1ub2RlPlxuPC9tYXQtdHJlZT5cbiJdfQ==