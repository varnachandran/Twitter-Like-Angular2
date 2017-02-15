System.register(['angular2/core', './mylike.component'], function(exports_1, context_1) {
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
    var core_1, mylike_component_1;
    var MyTweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mylike_component_1_1) {
                mylike_component_1 = mylike_component_1_1;
            }],
        execute: function() {
            MyTweetComponent = (function () {
                function MyTweetComponent() {
                    console.log(this.tweet);
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], MyTweetComponent.prototype, "tweet", void 0);
                MyTweetComponent = __decorate([
                    core_1.Component({
                        selector: 'mytweet',
                        template: "\n<div class=\"media\">\n  <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"media-object\" src=\"{{ tweet.imageUrl }}\" >\n    </a>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">\n    <span class=\"author\">{{tweet.author}}</span>\n    <span class=\"handle\">{{tweet.handle}}</span>\n    </h4>\n    <span class=\"body\">{{tweet.body}}</span>\n    <mylike [numLikes]=\"tweet.numLikes\" [isLike]=\"tweet.isLike\"></mylike>\n  </div>\n</div>\n",
                        styles: ["\n    .media{\n        \n        font-size:40\n        margin-bottom: 20px;\n    \n    }\n    .handle {\n            color: #ccc;\n        }\n        \n        \n        .media-object {\n            border-radius: 10px;\n        }\n    "
                        ],
                        directives: [mylike_component_1.MyLikeComponent],
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyTweetComponent);
                return MyTweetComponent;
            }());
            exports_1("MyTweetComponent", MyTweetComponent);
        }
    }
});
//# sourceMappingURL=mytweet.component.js.map