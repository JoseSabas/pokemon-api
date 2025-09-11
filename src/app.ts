import express from "express";
import pokemonRoutes from "./routes/pokemonRoutes";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());  // Middleware to parse JSON

// Routes
app.use("/pokemons", pokemonRoutes);

app.use(notFoundHandler);  // 404 handler (for unknown routes)

app.use(errorHandler);  // Global error handler

export default app;