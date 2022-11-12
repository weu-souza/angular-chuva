import {Component, NgModule, OnInit} from '@angular/core';
import {SpeedDialModule} from 'primeng/speeddial';
import {SidebarModule} from 'primeng/sidebar';
import {FocusTrapModule} from 'primeng/focustrap';

NgModule({
  imports : [
    SpeedDialModule,
    SidebarModule,
    FocusTrapModule
  ]
})
@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',

})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
