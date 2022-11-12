import {Component, NgModule} from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';


NgModule({
  imports : [
    DropdownModule
  ]
})

interface language {
  name: string,

}

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})


export class HeaderComponent {
  languages : language[];



  constructor() {

    this.languages = [
      {name: 'pt-br'},
      {name: 'en-us'}

    ]

  }

  eventChange({event}: { event: any }){
    return event.value
  }


}
