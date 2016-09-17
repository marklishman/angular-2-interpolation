import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { CalcComponent } from "./calc.component";
import { EscapingComponent } from "./escaping.component";
import { PersonComponent } from "./person.component";

@NgModule({
    imports:      [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        CalcComponent,
        EscapingComponent,
        PersonComponent
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }