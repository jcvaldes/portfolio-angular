import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  equipo: any[] = [];
  loading: boolean = true;
  constructor( public _is: InformacionService) {

  }

  ngOnInit() {
    this._is.getAbout().subscribe(data => {
      this.equipo = data;
      this.loading = false;
    });
  }

}
