const md5 = require('md5');

const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { nome, senha } = req.body;

        const senha = md5(`${senha}xCg532%@%gdvf^5DGaa6&*rFTfg^FD4\$OIFThrR_gh(ugf*/`)
        const users = await User.findOne({
            where: {
                nome,
                senha
            }
        });
        return res.json(users);
        // return res.json({ "senha": md5('senha' + 'xCg532%@%gdvf^5DGaa6&*rFTfg^FD4\$OIFThrR_gh(ugf*/') });
    },
};