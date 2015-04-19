System.register("app/bootstrap", ["angular2/angular2", "app/services/nameService", "app/components/input/input", "app/components/list/list"], function($__export) {
  "use strict";
  var __moduleName = "app/bootstrap";
  var Component,
      View,
      bootstrap,
      nameService,
      HelloInput,
      HelloList,
      Bootstrap;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      bootstrap = $__m.bootstrap;
    }, function($__m) {
      nameService = $__m.nameService;
    }, function($__m) {
      HelloInput = $__m.HelloInput;
    }, function($__m) {
      HelloList = $__m.HelloList;
    }],
    execute: function() {
      Bootstrap = (function() {
        function Bootstrap() {}
        return ($traceurRuntime.createClass)(Bootstrap, {}, {});
      }());
      Object.defineProperty(Bootstrap, "annotations", {get: function() {
          return [new Component({
            selector: 'my-app',
            injectables: [nameService]
          }), new View({
            templateUrl: "app/main.html",
            directives: [HelloInput, HelloList]
          })];
        }});
      bootstrap(Bootstrap);
    }
  };
});
