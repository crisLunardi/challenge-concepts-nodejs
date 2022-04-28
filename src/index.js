const { application } = require('express');
const express = require('express'); // Comando básico para importar um módulo.

const app = express(); // Comando básico para chamar o módulo express.

app.use(express.json());

/**
 * GET -> É o método para buscar uma informação no servidor;
 * POST -> É o método para iserir uma informação no servidor;
 * PUT -> É o método para alterar uma informação no servidor;
 * PATCH -> É o método para alterar uma informação específica no servidor;
 * DELETE -> É o método para deletar uma informação no servidor.
 */

/**
 * Tipos de parâmetros 
 * Route Params => Identificar um recurso editar/deletar/buscar;
 * Query Params => Paginação/Filtro;
 * Body Params => Os objetos inserção/alteração (JSON);
 */

 app.get("/courses", (req, res) => {
     const query = req.query;
     console.log(query);
    return res.json(["Course 1", "Course 2", "Course 3"]);
});

app.post("/courses", (req,res) => {
    const body = req.body;
    console.log(body);
    return res.json(["Course 1", "Course 2", "Course 3", "Course 4"]);
})

app.put("/courses/:id", (req,res) => {
    const { id } = req.params;
    console.log(id);
    return res.json(["Course 6", "Course 2", "Course 3", "Course 4"]);
});

app.patch("/courses/:id", (req,res) => {
    return res.json(["Course 6", "Course 2", "Course 3", "Course 4"])
});

app.listen('3333'); // Comando básico para definir qual "porta" do servidor a aplicação irá rodar.

