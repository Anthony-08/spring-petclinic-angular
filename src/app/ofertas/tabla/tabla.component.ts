import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Ofertas } from '../models/ofertas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  public ofertaLista: Array<Ofertas>;

  constructor(private ofertasService: OfertasService, private router: Router) { }

  ngOnInit() {
    this.ofertasService.getOfertas().subscribe( data => {
      this.ofertaLista = data;
    });
  }

  public goFormulario(){
    this.router.navigate(['ofertas/agregar']);
  }

  public borrarOferta(id: number){
    this.ofertasService.deleteOferta(id).subscribe( data => {
      this.router.navigate(['ofertas']);
    });
  }

}
