System.register("app/services/nameService", [], function($__export) {
  "use strict";
  var __moduleName = "app/services/nameService";
  var nameService,
      names;
  function contains(list, el) {
    return list.indexOf(el) !== -1;
  }
  function remove(list, el) {
    var index = list.indexOf(el);
    if (index > -1) {
      list.splice(index, 1);
      return true;
    }
    return false;
  }
  return {
    setters: [],
    execute: function() {
      nameService = (function() {
        function nameService() {}
        return ($traceurRuntime.createClass)(nameService, {
          getAll: function() {
            return new Promise((function(resolve) {
              resolve(names);
            }));
          },
          add: function(name) {
            return new Promise((function(resolve) {
              var item = {name: name};
              names.push(name);
              resolve(item);
            }));
          },
          remove: function(item) {
            return new Promise((function(resolve) {
              if (contains(names, item)) {
                remove(names, item);
              }
              resolve(item);
            }));
          }
        }, {});
      }());
      $__export("nameService", nameService);
      Object.defineProperty(nameService.prototype.add, "parameters", {get: function() {
          return [[$traceurRuntime.type.string]];
        }});
      names = [];
    }
  };
});
