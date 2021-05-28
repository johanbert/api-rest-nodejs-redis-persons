import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment }  from '../../environments/environment';
import { PersonModel, PersonsModel } from '../models/person.model';
@Injectable({
  providedIn: 'root'
})
export class PersonsService {
  constructor( private http:HttpClient ) { }

  getPersons(){
    return this.http.get(`${environment.API_URL}${environment.ENDPOINTS.getPersons}`)
  }
  createPerson(json:PersonModel){
    return this.http.post(`${environment.API_URL}${environment.ENDPOINTS.createPerson}`,json)
  }
  updatePerson(json:PersonsModel){
    console.log('jsonjson',json);
    // console.log('new PersonsModel(json)',new PersonsModel(json));
    
    return this.http.patch(`${environment.API_URL}${environment.ENDPOINTS.updatePerson}`,json)
  }
}
