import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { pokemonData } from '../models/pokemonData'

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string =""
  private pokeData:pokemonData | any

  constructor(private http:HttpClient) {
    this.baseURL = environment.pokeApi
   }

  getPokemon(pokemonName:string):Observable<pokemonData>{
    this.pokeData = this.http.get<pokemonData>(`${this.baseURL}${pokemonName}`);
    return this.pokeData;
  }
}
