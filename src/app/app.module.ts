import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Rutas
import { appRouting } from './app.routes';

// Servicios
import { InformacionService } from './services/informacion.service';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductosService } from './services/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouting
  ],
  providers: [
    InformacionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
