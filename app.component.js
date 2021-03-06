System.register(['angular2/core', './mytweet.component', './mytweet.service'], function(exports_1, context_1) {
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
    var core_1, mytweet_component_1, mytweet_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mytweet_component_1_1) {
                mytweet_component_1 = mytweet_component_1_1;
            },
            function (mytweet_service_1_1) {
                mytweet_service_1 = mytweet_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(mytweetservice) {
                    console.log("REached");
                    this.tweets = mytweetservice.getTweets();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'myapp',
                        template: "\n    <h1>Twitter-like UI using Angular Components</h1>\n    <p>\n    <div *ngFor=\"#tweet of tweets\">\n    <p>\n    <mytweet [tweet]=\"tweet\"></mytweet>\n    </div>\n    ",
                        directives: [mytweet_component_1.MyTweetComponent],
                        providers: [mytweet_service_1.MyTweetService]
                    }), 
                    __metadata('design:paramtypes', [mytweet_service_1.MyTweetService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map