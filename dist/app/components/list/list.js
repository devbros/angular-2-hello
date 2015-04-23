System.register("app/components/list/list", ["angular2/angular2", "angular2/di", "app/services/nameService"], function($__export) {
  "use strict";
  var __moduleName = "app/components/list/list";
  var Component,
      View,
      For,
      List,
      Inject,
      nameService,
      HelloList;
  return {
    setters: [function($__m) {
      Component = $__m.Component;
      View = $__m.View;
      For = $__m.For;
      List = $__m.List;
    }, function($__m) {
      Inject = $__m.Inject;
    }, function($__m) {
      nameService = $__m.nameService;
    }],
    execute: function() {
      HelloList = (function() {
        function HelloList(nameService) {
          this.nameService = nameService;
          this.init();
        }
        return ($traceurRuntime.createClass)(HelloList, {
          init: function() {
            var $__0 = this;
            this.nameService.getAll().then((function(items) {
              $__0.names = items;
            }));
          },
          delete: function(item) {
            this.nameService.remove(item);
          }
        }, {});
      }());
      $__export("HelloList", HelloList);
      Object.defineProperty(HelloList, "annotations", {get: function() {
          return [new Component({selector: 'hello-list'}), new View({
            directives: [For],
            templateUrl: "app/components/list/templates/list.html"
          })];
        }});
      Object.defineProperty(HelloList, "parameters", {get: function() {
          return [[nameService, new Inject(nameService)]];
        }});
    }
  };
});
