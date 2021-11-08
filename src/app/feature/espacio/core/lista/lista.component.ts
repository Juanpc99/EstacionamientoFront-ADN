import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Espacio } from '../../shared/model/espacio';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() listaEspacios: Observable<Espacio[]>
  constructor() { }

  ngOnInit(): void {
  }

}
