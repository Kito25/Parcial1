import { Component } from '@angular/core';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.css']
})
export class FiltroComponent {
  autos: any[] = [
    {id:1, marca: 'Toyota', modelo: 'Corolla', estado: 'usado', imagen: 'assets/Toyota-corolla.jpg' },
    { id:2, marca: 'Honda', modelo: 'Civic', estado: 'nuevo', imagen: 'assets/Honda-civic.jpg' },
    { id:3, marca: 'Ford', modelo: 'Mustang', estado: 'usado', imagen: 'assets/Ford-Mustang.jpg' },
    { id:4, marca: 'Chevrolet', modelo: 'Camaro', estado: 'nuevo', imagen: 'assets/Chevrolet-Camaro.jpg' },
    { id:5, marca: 'Hyundai', modelo: 'Elantra', estado: 'usado', imagen: 'assets/Hyundai-Elantra.jpg' },
    { id:6, marca: 'Volkswagen', modelo: 'Golf', estado: 'nuevo', imagen: 'assets/Volkswagen-Golf.jpg' }
  ];

  estadoSeleccionado: string = 'todos';
  nuevoAuto: any = {id:'', marca: '', modelo: '', estado: '', imagen: '' };

  filtrarAutos() {
    if (this.estadoSeleccionado === 'todos') {
      return this.autos;
    } else {
      return this.autos.filter(auto => auto.estado === this.estadoSeleccionado );
    }
  }
  agregarAuto() {
    this.autos.push(this.nuevoAuto);
    this.nuevoAuto = { id:'',marca: '', modelo: '', estado: '', imagen: '' };
  }
  eliminarVehiculo(index: number) {
    this.autos.splice(index, 1);
  }
  
}

