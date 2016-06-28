import {Component} from '@angular/core';

@Component({
    selector: 'person',
    template: `
        <h1>{{heading}}</h1>
        
        <ul style="color:green;">
            <li>Property</li>
            <li>Primitive & Object</li>
            <li>Ternary</li>
            <li>Concatenation</li>
            <li>Safe navigation operator</li>
        </ul>
        
        <p>
            Name: {{person.sex === 'm' ? 'Mr' : 'Ms'}}
                  {{person.name.first + ' ' + person.name.surname}}
        </p>
        <p>
            City: {{person.address?.city}}
        </p>`
})
export class PersonComponent {

    private heading = 'Person Details';
    private person = {
        name: {
            first: 'Harry',
            surname: 'Angel'
        },
        sex: 'm'
    }
}