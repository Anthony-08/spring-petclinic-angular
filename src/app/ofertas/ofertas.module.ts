import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaFiltradaComponent } from './tabla-filtrada/tabla-filtrada.component';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    TablaComponent,
    FormularioComponent,
    TablaFiltradaComponent
  ],
  exports: [
    TablaComponent,
    FormularioComponent,
    TablaFiltradaComponent
  ]
})
export class OfertasModule { }
