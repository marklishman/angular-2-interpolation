import {Component} from '@angular/core';

@Component({
    selector: 'calc',
    template: `
    
        <ul style="color:green;">
            <li>Arithmetic</li>
            <li>Template Reference Variable</li>
            <li>Method</li>
            <li>Getter</li>
            <li>One-time binding</li>
            <li>Restrictions (Math)</li>
        </ul>
    
        <p>
            <input #num1 type="number" value="{{init.first}}" (input)="0">
            <input #num2 type="number" value="{{init.second}}" (input)="0">
        </p>
        
        <p>
            Sum: {{num1.valueAsNumber + num2.valueAsNumber}}, 
            Largest: {{max(num1.valueAsNumber, num2.valueAsNumber)}} 
        </p>`
})
export class CalcComponent {

    private get init(): any {
        return {
            first: 11,
            second: 22
        }
    }

    private max(first: number, second: number): number {
        return Math.max(first, second);
    }
}