import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.intrface';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private _urlApi : string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscaPais( termino: string): Observable<Country[]>{
    const url = `${this._urlApi}/name/${termino}`;
    return this.http.get<Country[]>(url)
  }

  buscaCapital( termino: string): Observable<Country[]>{
    const url = `${this._urlApi}/capital/${termino}`;
    return this.http.get<Country[]>(url)
  }
  getPaiesCode( id: string): Observable<Country>{
    const url = `${this._urlApi}/alpha/${id}`;
    return this.http.get<Country>(url)
  }
}
