import {Component, View, bootstrap} from 'angular2/angular2';
import {nameService} from 'app/services/nameService';
import {HelloInput} from 'app/components/input/input';
import {HelloList} from 'app/components/list/list';

@Component({
  selector: 'my-app',
  injectables: [nameService]
})
@View({
  templateUrl: `app/main.html`,
  directives: [HelloInput, HelloList]
})

class Bootstrap {
  constructor() {}
}

bootstrap(Bootstrap);