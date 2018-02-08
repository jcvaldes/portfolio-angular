import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductosService {
  productos: any[] = [];
  productos_filtrados: any[] = [];
  constructor(public http: Http) {
  }
  loadProducto(cod: string) {
    return this.http.get(`https://portfolio-6ad1d.firebaseio.com/productos/${cod}.json`)
     .map( data =>  data.json());
  }
  async loadProductos(): Promise<any[]> {
    // debugger
    // // tslint:disable-next-line:no-shadowed-variable
    // let promesa = new Promise( (resolve, reject) => {
    //   this.http.get('https://portfolio-6ad1d.firebaseio.com/productos_idx.json')
    //   .subscribe( data =>  {
    //     this.productos = data.json();
    //     resolve({ 'productos': this.productos});
    //   });
    // });
    // return promesa;

      let response =  await this.http.get('https://portfolio-6ad1d.firebaseio.com/productos_idx.json')
          .toPromise();
          debugger
      this.productos = response.json();
      return response.json();
  }

  searchProductos(termino: string): any[] {
    if ( this.productos.length === 0) {
      this.loadProductos().then((data) => {
        return this.filtrar_productos(termino);
      });
    } else {
      return this.filtrar_productos(termino);
    }
  }

  private filtrar_productos(termino: string) {
    this.productos_filtrados = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLocaleLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrados.push(prod);
      }
    });
    return this.productos_filtrados;
  }
}
