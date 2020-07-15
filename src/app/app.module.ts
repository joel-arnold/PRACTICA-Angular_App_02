// ? Importaciones generales
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

// ? Rutas
import { APP_ROUTING } from './app.routes';

// ? Servicios
import { HeroesService } from './servicios/heroes.service';

// ? Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { ResultadoBusquedaComponent } from './components/resultado-busqueda/resultado-busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    ResultadoBusquedaComponent,
  ],
  imports: [BrowserModule, APP_ROUTING, FormsModule],
  providers: [HeroesService],
  bootstrap: [AppComponent],
})

export class AppModule {}