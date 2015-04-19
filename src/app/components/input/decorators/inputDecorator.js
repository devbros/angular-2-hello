import {Decorator} from 'angular2/angular2';

@Decorator({
  selector: 'input',
  events: {'keyup': 'inputKeyup()'}
})
export class inputDecorator {
  construct() {
    console.log('decorator has booted');
  }
  inputKeyup() {
    console.log('stuff has happened');
  }
}