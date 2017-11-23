const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post('/mostrarPost', async (req, res) => {
    try {

        let variavel = await {
            nome: req.body.nome,
            senha: req.body.senha,
            senhaHash: await bcrypt.hash(req.body.senha, 10)
        }

        return res.send({ variavel });
    }
    catch (error) {
        return res.status(400).send({
            error: "Falha !",
            mensagem: error
        });
    }
});

module.exports = (app) => {
    return app.use(router);
}