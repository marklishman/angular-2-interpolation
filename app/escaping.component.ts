import { Component } from '@angular/core';

@Component({
    selector: 'escape',
    template: `
        <h2>Escape</h2>
        <p>{{html}}</p>
        <p>{{script}}</p>
        <p>
            For HTML, don't use {{stars}}, 
            use <span [innerHTML]="stars"></span> instead
        </p>
        <p ngNonBindable>{{Don't evaluate this}}</p>`
})
export class EscapingComponent {

    private html = '<div>this is a div</div>';
    private script = '<script>alert("danger!")</script>';

    private get stars(): string {
        return '&#10032;'.repeat(4);
    }
}