import { Injectable } from '@angular/core';
import { Ofertas } from './models/ofertas';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OfertasService {

  public ruta = 'http://localhost:9966/petclinic/api/';

  constructor(private httpClient: HttpClient) { }

  public getOfertas() {
    return this.httpClient.get<Ofertas[]>(this.ruta + 'ofertas');
  }
  public getOfertasVigentes(){
    return this.httpClient.get<Ofertas[]>(this.ruta + 'listOfertasVigentes');
  }
  public getOfertasById(id: number){
    return this.httpClient.get<Ofertas>(this.ruta + 'ofertas/' + id);
  }
  public postOferta(oferta: Ofertas){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.httpClient.post(this.ruta + 'ofertas', oferta, { headers });
  }
  public deleteOferta(id: number){
    return this.httpClient.delete(this.ruta + 'ofertas/' + id);
  }
}
