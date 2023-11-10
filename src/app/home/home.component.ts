import { Component } from '@angular/core';
import { Paciente } from '../interfaces/Paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //atributos
  public pacientes:Paciente[]=[]

  public constructor(public peticion:PacienteService){

    this.peticion.buscarPacientes()
    .subscribe((respuesta)=>{
      console.log(respuesta)
      this.pacientes=respuesta
    })
    
  }

}
