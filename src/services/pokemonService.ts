import axios from "axios";
import { PokemonListData, PokemonDetailData, SimplifiedPokemon } from "../interfaces/PokemonApiResponses";

const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

export const fetchPokemons = async(limit:number, page:number):Promise<SimplifiedPokemon[]> => {
  const offset = (page - 1) * limit;

  const {data:pokemonList} = await axios.get<PokemonListData>(`${POKEAPI_BASE_URL}/pokemon`, {
    params: {limit, offset}
  });

  const pokemonData = await Promise.allSettled(
    pokemonList.results.map(async({url}) => {
      const {data:detailData} = await axios.get<PokemonDetailData>(url);

      return {
        name: detailData.name,
        types: detailData.types.map((t) => t.type.name),
      };
    })
  );

  return pokemonData
    .filter((result) => result.status === "fulfilled")
    .map((result) => (result as PromiseFulfilledResult<SimplifiedPokemon>).value);
};