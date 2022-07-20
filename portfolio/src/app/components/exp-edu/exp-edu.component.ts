import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-exp-edu',
  templateUrl: './exp-edu.component.html',
  styleUrls: ['./exp-edu.component.css']
})
export class ExpEduComponent implements OnInit {
  eduList: any=[];
  expList: any=[];
  constructor(private datosPorfolio: DatosService) { }

  ngOnInit(): void {
    
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.eduList = data.education;
    });
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.expList = data.experience;
    })
  }

}
