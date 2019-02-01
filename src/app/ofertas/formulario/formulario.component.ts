import { Component, OnInit } from '@angular/core';
import { Ofertas } from '../models/ofertas';
import { OfertasService} from '../ofertas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  errorMessage: string;
  ofertas: Ofertas;

  constructor(private route: ActivatedRoute, private router: Router, private ofertasService: OfertasService) { 
    this.ofertas = <Ofertas>{};
  }

  ngOnInit() {
  }

  onSubmit(oferta: Ofertas){
    oferta.id = null;
    this.ofertasService.postOferta(oferta).subscribe(
      new_oferta => {
        this.router.navigate(['/ofertas', oferta.id]);
      },
      error => this.errorMessage = <any> error
    );

  }

}
