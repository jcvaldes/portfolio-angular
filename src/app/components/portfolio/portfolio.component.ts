import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent {
  // tslint:disable-next-line:no-inferrable-types
  loading: boolean = true;
  productos: any[] = [];
  constructor(private _ps: ProductosService) {
    debugger
      _ps.loadProductos().then(data => {
        this.productos = data;
        this.loading = false;
      });
  }
}
