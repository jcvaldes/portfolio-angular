import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {
  loading: boolean = true;
  productos_filtrados: any[] = [];

  constructor( private route: ActivatedRoute, private _ps: ProductosService) {
    _ps.loadProductos().then((data) => {
      route.params.subscribe( params => {
        this.productos_filtrados = this._ps.searchProductos(params['termino']);
        this.loading = false;
       });
    });
  }
}
