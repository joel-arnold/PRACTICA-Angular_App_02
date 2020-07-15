import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/servicios/heroes.service';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';

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
    private rutaActivada: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.rutaActivada.params.subscribe((params) => {
      this.heroesEncontrados = this.servicioHeroes.buscarHeroes(
        params['texto']
      );

      this.textoBusqueda = params['texto'];

      console.log(`El texto de busqueda es: ${params['texto']}`);
      console.log(
        `Estos son los heroes encontrados: ${this.heroesEncontrados}`
      );
    });
  }
}
