import {Component, View, For, List} from 'angular2/angular2';
import {Inject} from 'angular2/di';
import {nameService} from 'app/services/nameService';

@Component({
  selector: 'hello-list'
})

@View({
  directives: [For],
  templateUrl: `app/components/list/templates/list.html`
})

export class HelloList {
  names:List;
  nameService:nameService;

  constructor(@Inject(nameService)nameService:nameService) {
    this.nameService = nameService;
    this.init();
  }
  
  init() {
    this.nameService.getAll().then(
      items => { this.names = items; }
    );
  }
  
  delete(item) {
    this.nameService.remove(item);
  }
}