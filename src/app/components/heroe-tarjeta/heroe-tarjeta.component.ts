import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [],
})
export class HeroeTarjetaComponent implements OnInit {
  
  @Input() heroe: any = {}
  @Input() indice: number

  @Output() heroeSeleccionado: EventEmitter<number>

  constructor(private routercito: Router) {
    this.heroeSeleccionado = new EventEmitter()
  }

  ngOnInit(): void {
  }

  verHeroe() {
    this.routercito.navigate(['heroe', this.indice]);
    //this.heroeSeleccionado.emit(this.indice)
  }
}
