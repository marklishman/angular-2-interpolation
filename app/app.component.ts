import { Component } from '@angular/core';

import { PersonComponent } from "./person.component";
import { CalcComponent } from "./calc.component";
import { EscapingComponent } from "./escaping.component";

@Component({
    selector: 'interpolation',
    template: `
        <person *ngIf="showSection('person')"></person>
        <calc *ngIf="showSection('calc')"></calc>
        <escape *ngIf="showSection('escape')"></escape>
        `,
    directives: [
        PersonComponent,
        CalcComponent,
        EscapingComponent
    ]
})
export class AppComponent {

    private showSection(name: string): boolean {
        if (!window.location.search) {
            return true;
        }
        const PARAM = window.location.search.substr(1);
        return PARAM === name;
    }

}