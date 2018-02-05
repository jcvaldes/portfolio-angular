import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  anio: number = new Date().getFullYear();
  info: any = {};
  constructor(public _is: InformacionService) {
    this._is.getInfo().subscribe(data => {
      this.info = data;
    });
   }

  ngOnInit() {
  }

}
