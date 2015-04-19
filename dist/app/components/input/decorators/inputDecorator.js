System.register("app/components/input/decorators/inputDecorator", ["angular2/angular2"], function($__export) {
  "use strict";
  var __moduleName = "app/components/input/decorators/inputDecorator";
  var Decorator,
      inputDecorator;
  return {
    setters: [function($__m) {
      Decorator = $__m.Decorator;
    }],
    execute: function() {
      inputDecorator = (function() {
        function inputDecorator() {}
        return ($traceurRuntime.createClass)(inputDecorator, {
          construct: function() {
            console.log('decorator has booted');
          },
          inputKeyup: function() {
            console.log('stuff has happened');
          }
        }, {});
      }());
      $__export("inputDecorator", inputDecorator);
      Object.defineProperty(inputDecorator, "annotations", {get: function() {
          return [new Decorator({
            selector: 'input',
            events: {'keyup': 'inputKeyup()'}
          })];
        }});
    }
  };
});
