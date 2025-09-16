/*{
  "count": 1302,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    ...
  ]
}*/

interface PokemonListResult {
  url: string;
}
export interface PokemonListData {
  results: PokemonListResult[];
}

////////////////////////////////////////////////////////////////////////

/*{
  "id": 1,
  "name": "bulbasaur",
  "types": [
    {
      "slot": 1,
      "type": {
        "name": "grass",
        "url": "https://pokeapi.co/api/v2/type/12/"
      }
    },
    ...
  ],
  "weight": 69,
  ...
}*/

interface PokemonDetailType {
  type: {
    name: string;
  };
}
export interface PokemonDetailData {
  name: string;
  types: PokemonDetailType[];
}

export interface SimplifiedPokemon {
  name: string;
  types: string[];
};