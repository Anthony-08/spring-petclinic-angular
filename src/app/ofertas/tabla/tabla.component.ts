import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Ofertas } from '../models/ofertas';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  public ofertaLista: Array<Ofertas>;

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertasService.getOfertas().subscribe( data => {
      this.ofertaLista = data;
    })
  }

}
