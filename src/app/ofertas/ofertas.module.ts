import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TablaFiltradaComponent } from './tabla-filtrada/tabla-filtrada.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TablaComponent, FormularioComponent, TablaFiltradaComponent]
})
export class OfertasModule { }
