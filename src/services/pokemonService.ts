import axios from "axios";
import { PokemonListData, PokemonDetailData, SimplifiedPokemon } from "../interfaces/PokemonApiResponses";

export const fetchPokemons = async(limit:number, page:number):Promise<SimplifiedPokemon[]> => {
  const offset = (page - 1) * limit;

  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const pokemonList: PokemonListData = response.data;

  const pokemonData = await Promise.allSettled(
    pokemonList.results.map(async (pokemon) => {
      try {
        const detailResponse = await axios.get(pokemon.url);
        const detailData: PokemonDetailData = detailResponse.data;

        return {
          name: detailData.name,
          types: detailData.types.map((t) => t.type.name),
        };
      } catch (err) {
        return null;
      }
    })
  );

  return pokemonData
    .filter((result) => result.status === "fulfilled" && result.value !== null)
    .map((result) => (result as PromiseFulfilledResult<SimplifiedPokemon>).value);
};