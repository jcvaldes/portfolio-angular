import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent {

  productos: any[] = [];
  constructor(private _ps: ProductosService) {
    _ps.loadProductos().subscribe(data => {
      this.productos = data;
      console.log(data);
    });
  }
}
