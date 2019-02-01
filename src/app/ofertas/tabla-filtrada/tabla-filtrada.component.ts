import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Ofertas } from '../models/ofertas';

@Component({
  selector: 'app-tabla-filtrada',
  templateUrl: './tabla-filtrada.component.html',
  styleUrls: ['./tabla-filtrada.component.css']
})
export class TablaFiltradaComponent implements OnInit {

  public ofertaLista: Array<Ofertas>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertasVigentes().subscribe( data => {
      this.ofertaLista = data;
    })
  }

}
