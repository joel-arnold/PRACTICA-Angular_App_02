import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/shared/home/home.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { ResultadoBusquedaComponent } from "./components/resultado-busqueda/resultado-busqueda.component";
import { AboutComponent } from "./components/about/about.component";


const APP_ROUTES: Routes = [    
    { path: 'home', component: HomeComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'busqueda/:texto', component: ResultadoBusquedaComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)