const express = require("express");
const app = express();
const port = 8000;

const usuariosRoutes = require("./src/routes/usuariosRoutes");
const produtosRoutes = require("./src/routes/produtosRoutes");
const { login } = require("./src/controller/usuariosController");
const { rotaPrtegida } = require("./src/utils");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Olá mundo ");
});

app.post("/login", async (req, res) => {
    res.send(await login(req.body));
})

app.use("/usuarios", rotaPrtegida, usuariosRoutes);
app.use("/produtos", rotaPrtegida, produtosRoutes);


// erro 404
app.use((req, res) => {
    res.status(404).send("Rota não encontrada");
});


app.listen(port, () => {
    console.log(`servidor de pé: http://localhost:${port}`);

})