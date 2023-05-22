import { Component, Inject } from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
import * as i2 from "@angular/forms";
/**
 * @title CDK Dialog Overview
 */
class CdkDialogOverviewExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(CdkDialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal },
        });
        dialogRef.closed.subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkDialogOverviewExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CdkDialogOverviewExample, isStandalone: true, selector: "cdk-dialog-overview-example", ngImport: i0, template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <em>{{animal}}</em>\n  </li>\n</ol>\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: DialogModule }] }); }
}
export { CdkDialogOverviewExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkDialogOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example', standalone: true, imports: [FormsModule, NgIf, DialogModule], template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <em>{{animal}}</em>\n  </li>\n</ol>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Dialog }]; } });
class CdkDialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkDialogOverviewExampleDialog, deps: [{ token: i1.DialogRef }, { token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CdkDialogOverviewExampleDialog, isStandalone: true, selector: "cdk-dialog-overview-example-dialog", ngImport: i0, template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
export { CdkDialogOverviewExampleDialog };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkDialogOverviewExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example-dialog', standalone: true, imports: [FormsModule], template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RpYWxvZy9jZGstZGlhbG9nLW92ZXJ2aWV3L2Nkay1kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1vdmVydmlldy9jZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1vdmVydmlldy9jZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFPM0M7O0dBRUc7QUFDSCxNQU1hLHdCQUF3QjtJQUluQyxZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFckMsVUFBVTtRQUNSLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFTLDhCQUE4QixFQUFFO1lBQ3pFLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4R0FoQlUsd0JBQXdCO2tHQUF4Qix3QkFBd0IsdUZDbkJyQyx3U0FZQSwyQ0RLWSxXQUFXLCttQkFBRSxJQUFJLDRGQUFFLFlBQVk7O1NBRTlCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQU5wQyxTQUFTOytCQUNFLDZCQUE2QixjQUUzQixJQUFJLFdBQ1AsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLFlBQVksQ0FBQzs7QUFxQjVDLE1BT2EsOEJBQThCO0lBQ3pDLFlBQW1CLFNBQTRCLEVBQThCLElBQWdCO1FBQTFFLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQThCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDOzhHQUR0Riw4QkFBOEIsMkNBQ2dCLFdBQVc7a0dBRHpELDhCQUE4Qiw4RkU3QzNDLHlWQVNBLDRPRmtDWSxXQUFXOztTQUVWLDhCQUE4QjsyRkFBOUIsOEJBQThCO2tCQVAxQyxTQUFTOytCQUNFLG9DQUFvQyxjQUdsQyxJQUFJLFdBQ1AsQ0FBQyxXQUFXLENBQUM7OzBCQUc0QixNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlhbG9nLCBEaWFsb2dSZWYsIERJQUxPR19EQVRBLCBEaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kaWFsb2cnO1xuaW1wb3J0IHtOZ0lmfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBDREsgRGlhbG9nIE92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIE5nSWYsIERpYWxvZ01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0RpYWxvZ092ZXJ2aWV3RXhhbXBsZSB7XG4gIGFuaW1hbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogRGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbjxzdHJpbmc+KENka0RpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZywge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7bmFtZTogdGhpcy5uYW1lLCBhbmltYWw6IHRoaXMuYW5pbWFsfSxcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5jbG9zZWQuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XG4gICAgICB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlLWRpYWxvZy5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogRGlhbG9nUmVmPHN0cmluZz4sIEBJbmplY3QoRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7fVxufVxuIiwiPG9sPlxuICA8bGk+XG4gICAgPGxhYmVsIGlkPVwiZGlhbG9nLXVzZXItbmFtZVwiPldoYXQncyB5b3VyIG5hbWU/PC9sYWJlbD5cbiAgICA8aW5wdXQgZm9yPVwiZGlhbG9nLXVzZXItbmFtZVwiIFsobmdNb2RlbCldPVwibmFtZVwiPlxuICA8L2xpPlxuICA8bGk+XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+UGljayBvbmU8L2J1dHRvbj5cbiAgPC9saT5cbiAgPGxpICpuZ0lmPVwiYW5pbWFsXCI+XG4gICAgWW91IGNob3NlOiA8ZW0+e3thbmltYWx9fTwvZW0+XG4gIDwvbGk+XG48L29sPlxuIiwiPGgxPkhpIHt7ZGF0YS5uYW1lfX08L2gxPlxuPGRpdj5cbiAgPGxhYmVsIGlkPVwiZmF2b3JpdGUtYW5pbWFsXCI+V2hhdCdzIHlvdXIgZmF2b3JpdGUgYW5pbWFsPzwvbGFiZWw+XG4gIDxpbnB1dCBmb3I9XCJmYXZvcml0ZS1hbmltYWxcIiBbKG5nTW9kZWwpXT1cImRhdGEuYW5pbWFsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIj5cbjwvZGl2PlxuPGRpdj5cbiAgPGJ1dHRvbiAoY2xpY2spPVwiZGlhbG9nUmVmLmNsb3NlKGRhdGEuYW5pbWFsKVwiPk9LPC9idXR0b24+XG4gIDxidXR0b24gKGNsaWNrKT1cImRpYWxvZ1JlZi5jbG9zZSgpXCI+Q2FuY2VsPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==