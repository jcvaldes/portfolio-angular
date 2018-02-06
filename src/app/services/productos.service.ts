import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductosService {
  constructor(public http: Http) { }
  loadProducto(cod: string) {
    return this.http.get(`https://portfolio-6ad1d.firebaseio.com/productos/${cod}.json`)
     .map( data =>  data.json());
  }
  loadProductos() {
    return this.http.get('https://portfolio-6ad1d.firebaseio.com/productos_idx.json')
     .map( data =>  data.json());
 }
}
