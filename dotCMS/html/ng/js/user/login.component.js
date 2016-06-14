System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent() {
                }
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: "login",
                        template: "\n        <form class=\"form-horizontal\">\n            <div class=\"form-group\">\n                <label for=\"\" class=\"col-sm-2 control-label\">Email</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"email\" class=\"form-control\" id=\"\" placeholder=\"Email\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"\" class=\"col-sm-2 control-label\">Password</label>\n                <div class=\"col-sm-10\">\n                    <input type=\"password\" class=\"form-control\" id=\"\" placeholder=\"Password\">\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"col-sm-offset-2 col-sm-10\">\n                    <button type=\"submit\" class=\"btn btn-default\">Log in</button>\n                </div>\n            </div>\n        </form>\n    ",
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map