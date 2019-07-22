"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var text_value_accessor_1 = require("nativescript-angular/forms/value-accessors/text-value-accessor");
var MASKED_TEXT_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return TextInputLayoutValueAccessor; }), multi: true
};
/**
 * The accessor for setting a selectedIndex and listening to changes that is used by the
 * {@link NgModel} directives.
 *
 *  ### Example
 *  ```
 *  <TextInputLayout [(ngModel)]="model.test">
 *  ```
 */
var TextInputLayoutValueAccessor = /** @class */ (function (_super) {
    __extends(TextInputLayoutValueAccessor, _super);
    function TextInputLayoutValueAccessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextInputLayoutValueAccessor = __decorate([
        core_1.Directive({
            selector: "TextInputLayout[ngModel], TextInputLayout[formControlName], TextInputLayout[formControl]," +
                "textInputLayout[ngModel], textInputLayout[formControlName], textInputLayout[formControl]," +
                "text-input-layout[ngModel], text-input-layout[formControlName], text-input-layout[formControl]," +
                "TextInputLayoutWithIcon[ngModel], TextInputLayoutWithIcon[formControlName], TextInputLayoutWithIcon[formControl]," +
                "textInputLayoutWithIcon[ngModel], textInputLayoutWithIcon[formControlName], textInputLayoutWithIcon[formControl]," +
                "text-input-layout-with-icon[ngModel], text-input-layout-with-icon[formControlName], text-input-layout-with-icon[formControl]",
            providers: [MASKED_TEXT_VALUE_ACCESSOR],
            host: {
                "(touch)": "onTouched()",
                "(textChange)": "onChange($event.value)"
            }
        })
    ], TextInputLayoutValueAccessor);
    return TextInputLayoutValueAccessor;
}(text_value_accessor_1.TextValueAccessor));
exports.TextInputLayoutValueAccessor = TextInputLayoutValueAccessor;
