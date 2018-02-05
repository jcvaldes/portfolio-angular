import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  info: any = {};
  constructor( public _is: InformacionService) {
    this._is.getInfo().subscribe(data => {
      this.info = data;
    });
  }
}
