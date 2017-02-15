System.register(['angular2/core'], function(exports_1, context_1) {
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
    var MyLikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyLikeComponent = (function () {
                function MyLikeComponent() {
                    this.isLike = false;
                    this.numLikes = 0;
                }
                MyLikeComponent.prototype.OnLike = function () {
                    this.isLike = !this.isLike;
                    if (this.isLike)
                        this.numLikes++;
                    else
                        this.numLikes--;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyLikeComponent.prototype, "isLike", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyLikeComponent.prototype, "numLikes", void 0);
                MyLikeComponent = __decorate([
                    core_1.Component({
                        selector: 'mylike',
                        template: "\n    <div class=\"like\">\n    <i class=\"glyphicon glyphicon-heart\" [class.highlighted]=\"isLike\"\n    \n    (click)=\"OnLike()\"></i>\n    <div class=\"likes\">{{numLikes}}</div>\n    </div>\n    ",
                        styles: ["\n    .glyphicon-heart{\n        \n       color:#ccc;\n       cursor: pointer;\n    }\n     .highlighted{\n        color:deeppink;\n     }\n    \n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyLikeComponent);
                return MyLikeComponent;
            }());
            exports_1("MyLikeComponent", MyLikeComponent);
        }
    }
});
//# sourceMappingURL=mylike.component.js.map