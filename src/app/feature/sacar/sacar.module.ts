import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SacarVehiculoComponent } from './sacar-vehiculo/sacar-vehiculo.component';
import { SacarRoutingModule } from './sacar-routing.module';



@NgModule({
  declarations: [
    SacarVehiculoComponent
  ],
  imports: [
    CommonModule,
    SacarRoutingModule
  ]
})
export class SacaModule { }
