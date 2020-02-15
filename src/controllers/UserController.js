const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
        const { nome, cnpj, tipo, email, senha, status, verificacao, forgot } = req.body;

        const user = await User.create({ nome, cnpj, tipo, email, senha, status, verificacao, forgot });

        return res.json(user);
    }
};