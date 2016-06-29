"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var EscapingComponent = (function () {
    function EscapingComponent() {
        this.html = '<div>this is a div</div>';
        this.script = '<script>alert("danger!")</script>';
    }
    Object.defineProperty(EscapingComponent.prototype, "stars", {
        get: function () {
            return '&#10032;'.repeat(4);
        },
        enumerable: true,
        configurable: true
    });
    EscapingComponent = __decorate([
        core_1.Component({
            selector: 'other',
            template: "\n        <p>{{html}}</p>\n        <p>{{script}}</p>\n        <p>\n            For HTML, don't use {{stars}}, \n            use <span [innerHTML]=\"stars\"></span> instead\n        </p>\n        <p ngNonBindable>{{Don't evaluate this}}</p>"
        }), 
        __metadata('design:paramtypes', [])
    ], EscapingComponent);
    return EscapingComponent;
}());
exports.EscapingComponent = EscapingComponent;
//# sourceMappingURL=escaping.component.js.map