const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {

        if (await User.findOne(req.body.email)) {
            return res.status(400).send({ error: "E-mail de usuário já consta cadastrado" })
        }

        const user = await User.create(req.body);

        user.password = undefined;

        return res.send({ user });
    }
    catch (error) {
        return res.status(400).send({ error: "Falha no requistro do usuário" });
    }
});

module.exports = (app) => {
    return app.use('auth/', router);
}