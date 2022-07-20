import { Component, OnInit } from '@angular/core'; 
import { DatosService } from 'src/app/servicios/datos.service';    

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  /*skills: any;*/
  constructor(/*private datosService: DatosService*/) { }

  ngOnInit(): void {}
    /*this.datosService.obtenerDatos().subscribe(data => {
      this.skills = data;
    })
  }*/

}
