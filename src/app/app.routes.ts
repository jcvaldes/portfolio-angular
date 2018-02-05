import { RouterModule, Routes } from '@angular/router';

import {
    AboutComponent,
    PortfolioComponent,
    ProductoComponent
} from './components/index.paginas';

const routes: Routes = [
    { path: 'home', component: PortfolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: ProductoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes, {useHash: true});
