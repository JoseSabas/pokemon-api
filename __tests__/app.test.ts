import request from "supertest";
import app from "../src/app";
import { SimplifiedPokemon } from "../src/interfaces/PokemonApiResponses";

describe('Pokemons API', () => {
  it("GET /pokemons should return a list of pokemons", async() => {
    const res = await request(app).get("/pokemons?limit=10&page=1");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    (res.body as SimplifiedPokemon[]).forEach(pokemon => {
      expect(typeof pokemon.name).toBe("string");
      expect(pokemon.types.every(item => typeof item==='string')).toBe(true);
    })
  }, 20000);  //20s timeout

  it("GET /unknown should return 404", async() => {
    const res = await request(app).get("/unknown");
    expect(res.statusCode).toBe(404);
    expect(JSON.parse(res.text)).toEqual({error:"Not Found"});
  });
});