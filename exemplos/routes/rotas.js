const express = require("express");
const router = express.Router();

//inicio
router.get("/home", async (req, res) => {
    res.status(200).json({ message: "Olá, você pode acessar /registrar e /login ambos POST." });
});
// Cadastro de usuário
router.post("/registrar", async (req, res) => {
    res.status(200).json({ message: "Rota para registro do usuário" });
});

// Login de usuário
router.post("/login", async (req, res) => {
    res.status(200).json({ message: "Rota para login do usuário!" });
});

module.exports = router;