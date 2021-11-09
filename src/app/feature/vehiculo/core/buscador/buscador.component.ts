import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../../shared/models/vehiculo';
import { VehiculoService } from '../../shared/service/vehiculo.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent  implements OnInit{

  hayError: boolean = false;
  termino: string = '';
  vehiculos: Observable<Vehiculo[]>;
  
  constructor(private vehiculoService: VehiculoService) { }
 ngOnInit(){
   this.vehiculos = this.vehiculoService.consultar();
 }
  
  
  sugerencias(termino){
    this.hayError = false;
    console.log(termino);
  }

}
