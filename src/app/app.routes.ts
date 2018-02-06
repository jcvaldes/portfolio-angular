import { RouterModule, Routes } from '@angular/router';

import {
    AboutComponent,
    PortfolioComponent,
    ProductoComponent,
    SearchComponent
} from './components/index.paginas';

const routes: Routes = [
    { path: 'home', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'buscar/:termino', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes, {useHash: true});
