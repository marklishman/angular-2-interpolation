import { Component } from '@angular/core';

@Component({
    selector: 'other',
    template: `
        
        <ul style="color:green;">
            <li>innerHTML</li>
            <li>ngNonBindable</li>
            <li>{{expression}} translates to</li>
        </ul>

        <p>
            Don't use {{stars}}<br/>
            Use <span [innerHTML]="stars"></span> instead
        </p>
        
        <p ngNonBindable>
            {{Don't try to evaluate this!}}
        </p>`
})
export class OtherComponent {

    private name = "World";

    private get stars(): string {
        return '&#10032;'.repeat(4);
    }
}