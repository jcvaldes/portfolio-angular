import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent  {
  producto: any = {};
  cod: string;
  constructor( private route: ActivatedRoute, private _ps: ProductosService) {
    route.params.subscribe( params => {
      this.cod = params['id'];
      this._ps.loadProducto(params['id']).subscribe(data => {
        this.producto = data;
        console.log(this.producto);
      });
    });
  }

}
