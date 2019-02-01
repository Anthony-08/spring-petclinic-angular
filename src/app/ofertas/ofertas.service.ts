import { Injectable } from '@angular/core';
import { Ofertas } from './models/ofertas';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class OfertasService {

  constructor(private httpClient: HttpClient) { }

  public getOfertas() {
    return this.httpClient.get<Ofertas[]>('http://localhost:3000/ofertas');
  }
  public getOfertasVigentes(){
    return this.httpClient.get<Ofertas[]>('http://localhost:3000/ofertas/Vigentes');
  }
  public getOfertasById(id: number){
    return this.httpClient.get<Ofertas>('http://localhost:3000/ofertas/' + id);
  }
  public postOferta(oferta: Ofertas){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return this.httpClient.post('http://localhost:3000/ofertas', oferta, { headers });
  }
  public deleteOferta(id: number){
    return this.httpClient.delete('http://localhost:3000/ofertas/' + id);
  }
}
