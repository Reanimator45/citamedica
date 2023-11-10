import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(public servicio:HttpClient) { }

  public registarPacientes(){}

  public buscarPacientes():Observable<any>{
    let url="http://localhost:8080/api/v1/pacientes"
    return this.servicio.get(url)
  }

}
