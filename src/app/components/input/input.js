import {Component, View, If} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {nameService} from 'app/services/nameService';
import {inputDecorator} from 'app/components/input/decorators/inputDecorator';

// Annotation section
@Component({
  selector: 'hello-input'
})
@View({
  templateUrl: 'app/components/input/templates/input.html',
  directives: [If, inputDecorator]
})

export class HelloInput {
  name: string;
  nameService:nameService;

  constructor(@Inject(nameService)nameService:nameService) {
    this.nameService = nameService;
    this.name = '';
  }

  // Keep the name up-to-date
  update(name) {
    this.name = name;
  }
  
  changeName() {
    this.name = 'drone #' + Math.floor((Math.random()*8)+1);
  }

  add() {
    if (this.name !== undefined && this.name !== '') {
      this.nameService.add('' + this.name);
    }
  }
}