import { Component } from '@angular/core';

@Component({
    selector: 'other',
    template: `
        <p>{{script}}</p>
        <p>
            For HTML, don't use {{stars}}, 
            use <span [innerHTML]="stars"></span> instead
        </p>
        <p ngNonBindable>{{Don't evaluate this}}</p>`
})
export class ExpressionsComponent {

    private script = '<script>alert("danger!")</script>`';

    private get stars(): string {
        return '&#10032;'.repeat(4);
    }
}