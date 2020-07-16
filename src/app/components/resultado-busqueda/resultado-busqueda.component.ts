import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/servicios/heroes.service';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styles: [],
})
export class ResultadoBusquedaComponent implements OnInit {
  heroesEncontrados: Heroe[] = [];
  textoBusqueda: string;

  constructor(
    private servicioHeroes: HeroesService,
    private rutaActivada: ActivatedRoute,
    private routercito: Router
  ) {}

  ngOnInit(): void {
    this.rutaActivada.params.subscribe((params) => {
      this.heroesEncontrados = this.servicioHeroes.buscarHeroes(
        params['texto']
        );
        console.log(this.heroesEncontrados);

      this.textoBusqueda = params['texto'];
      

    });
  }

  verHeroe(indice: number) {
    this.routercito.navigate(['/heroe', indice]);
  }
}
