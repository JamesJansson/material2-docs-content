import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export interface User {
    name: string;
}
/**
 * @title Display value autocomplete
 */
export declare class AutocompleteDisplayExample implements OnInit {
    myControl: import("@angular/forms").FormControl;
    options: User[];
    filteredOptions: Observable<User[]>;
    ngOnInit(): void;
    displayFn(user: User): string;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteDisplayExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteDisplayExample, "autocomplete-display-example", never, {}, {}, never, never>;
}
