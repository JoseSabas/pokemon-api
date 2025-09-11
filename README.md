# Project summary
This project is a Node.js/TypeScript-based API that exposes an endpoint returning a complete list of all 1302 Pokémon. The API is designed to run locally or be deployed online and is structured for easy demonstration and real-time modification during a follow-up interview.


## Deployment
Install dependencies with:
```
npm install
```

Start the service locally:
```
npx serverless offline
```

## Usage
- Get all pokemos: http://localhost:3000/pokemons (GET)
- Get pokemons paginated: http://localhost:3000/pokemons?limit=20&page=1 (GET)