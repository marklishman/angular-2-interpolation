import { Component } from '@angular/core';

import { PersonComponent } from "./person.component";
import { CalcComponent } from "./calc.component";
import { EscapingComponent } from "./escaping.component";

@Component({
    selector: 'interpolation',
    template: `
        <person></person>
        <hr/>
        <calc></calc>
        <hr/>
        <escape></escape>
        `,
    directives: [
        PersonComponent,
        CalcComponent,
        EscapingComponent
    ]
})
export class AppComponent {

}