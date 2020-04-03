import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private Http:HttpClient) { }

  Url='http://localhost:8080/ejemplo01/personas';

  getPersonas(){
    return this.Http.get<Persona[]>(this.Url);
  }
}
