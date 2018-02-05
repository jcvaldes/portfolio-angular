import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class InformacionService {
  loadingInfo: Boolean = false;
  loadingAbout: Boolean = false;
  constructor(public http: Http) {}
  getInfo() {
    return this.http.get('assets/data/info.pagina.json')
      .map( data => data.json());
  }
  getAbout() {
     return this.http.get('https://portfolio-6ad1d.firebaseio.com/equipo.json')
      .map( data =>  data.json());
  }
}
