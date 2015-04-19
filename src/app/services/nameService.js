export class nameService {
  getAll() {
    return new Promise(resolve => {
      resolve(names);
    });
  }
  add(name: string) {
    return new Promise(resolve => {
      var item = {
        name: name
      };
      names.push(name);
      resolve(item);
    });
  }
  remove(item) {
    return new Promise(resolve => {
      if (contains(names, item)) {
        remove(names, item);
      }
      resolve(item);
    });
  }
}

var names = [];

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