import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent {
  info: any = {};
  constructor( public _is: InformacionService, private router: Router) {
    this._is.getInfo().subscribe(data => {
      this.info = data;
    });
  }
  search(termino: string) {
    this.router.navigate(['buscar', termino]);
  }
}
