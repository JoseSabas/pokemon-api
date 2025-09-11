import { Request, Response, NextFunction } from "express";
import { fetchPokemons } from "../services/pokemonService";

export const getPokemons = async(req:Request, res:Response, next:NextFunction) => {
  try {
    const limit = parseInt(req.query.limit as string) || 1302;
    const page = parseInt(req.query.page as string) || 1;

    const pokemons = await fetchPokemons(limit, page);
    res.json(pokemons);
  } catch (error) {
    next(error); // Pass error to global error handler
  }
};