import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../../core/modelo/menu-item';

@Component({
  selector: 'app-espacio',
  templateUrl: './espacio.component.html',
  styleUrls: ['./espacio.component.css']
})
export class EspacioComponent implements OnInit {

  public companies: MenuItem[] = [
    { url: '/espacio/', nombre: 'Espacios' },
    { url: '/espacio/ocupados', nombre: 'Ocupados' },
    { url: '/espacio/disponibles', nombre: 'Disponibles'}
    
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
