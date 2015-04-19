System.register("app/components/input/input", ["angular2/angular2", "angular2/di", "app/services/nameService", "app/components/input/decorators/inputDecorator"], function($__export) {
  "use strict";
  var __moduleName = "app/components/input/input";
  var Component,
      View,
      If,
      Inject,
      nameService,
      inputDecorator,
      HelloInput;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      If = $__m.If;
    }, function($__m) {
      Inject = $__m.Inject;
    }, function($__m) {
      nameService = $__m.nameService;
    }, function($__m) {
      inputDecorator = $__m.inputDecorator;
    }],
    execute: function() {
      HelloInput = (function() {
        function HelloInput(nameService) {
          this.nameService = nameService;
          this.name = '';
        }
        return ($traceurRuntime.createClass)(HelloInput, {
          update: function(name) {
            this.name = name;
          },
          changeName: function() {
            this.name = 'drone #' + Math.floor((Math.random() * 8) + 1);
          },
          add: function() {
            if (this.name !== undefined && this.name !== '') {
              this.nameService.add('' + this.name);
            }
          }
        }, {});
      }());
      $__export("HelloInput", HelloInput);
      Object.defineProperty(HelloInput, "annotations", {get: function() {
          return [new Component({selector: 'hello-input'}), new View({
            templateUrl: 'app/components/input/templates/input.html',
            directives: [If, inputDecorator]
          })];
        }});
      Object.defineProperty(HelloInput, "parameters", {get: function() {
          return [[nameService, new Inject(nameService)]];
        }});
    }
  };
});
