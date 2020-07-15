import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe: any = {};
  imagenCasa: string;
  constructor(
    private rutaActivada: ActivatedRoute,
    private _heroService: HeroesService,
    private ubicacion: Location
  ) {
    this.rutaActivada.params.subscribe((params) => {
      this.heroe = _heroService.getHero(params['id'])
    });
    console.log(this.heroe);
    if(this.heroe.casa == 'Marvel'){
      this.imagenCasa = 'assets/img/marvel.png'
    }else{
      this.imagenCasa = 'assets/img/dc.png'
    }
  }

  // volver(){
  //   this.ubicacion.back()
  // }
}
