import { Component, OnInit } from '@angular/core';
import { pokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:pokemonData
  name:string = "charizard"
  attributesTypes:string[] = ['FIRE', 'ROCK']

  constructor(
    private service:PokemonService
  ) {
    this.pokemon = {
      id:0,
    name:'',
    sprites:{
      front_default: ''
    },
    types:[]
    }
   }

  ngOnInit(): void {
    this.service.getPokemon("/bulbasaur").subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id:res.id,
            name:res.name,
            sprites:res.sprites,
            types:res.types
          }
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

}
