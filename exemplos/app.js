require("dotenv").config();
const express = require("express");
const cors = require("cors");
const rotas = require("./routes/rotas");

const app = express();

// Middlewares
app.use(cors());


// Rotas
app.use("/api", rotas );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));