import { Component } from '@angular/core';

import { PersonComponent } from "./person.component";
import { CalcComponent } from "./calc.component";
import { OtherComponent } from "./other.component";

@Component({
    selector: 'interpolation',
    template: `
        <person></person>
        <hr/>
        <calc></calc>
        <hr/>
        <other></other>
        `,
    directives: [
        PersonComponent,
        CalcComponent,
        OtherComponent
    ]
})
export class AppComponent {

}