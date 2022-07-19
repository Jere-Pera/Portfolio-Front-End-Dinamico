import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor() { }
  
    obtenerDatos(){
      console.log("el servicio funciona");
    }
}
