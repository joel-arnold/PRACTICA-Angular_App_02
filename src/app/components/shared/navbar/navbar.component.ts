import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../../servicios/heroes.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private routercito: Router) {}

  ngOnInit(): void {}

  buscarHeroes(texto: string) {
    this.routercito.navigate(['busqueda', texto]);
  }
}
