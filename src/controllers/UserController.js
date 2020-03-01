const md5 = require('md5');

const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { id } = req.params;
        const users = await User.findOne({
            where: {
                id
            }
        });
        return res.json(users);
        // return res.json({ "senha": md5('senha' + 'xCg532%@%gdvf^5DGaa6&*rFTfg^FD4\$OIFThrR_gh(ugf*/') });
    },
    // async store(req, res) {
    //     const { username } = req.body;
    //     const users = await User.findOne({
    //         where: {
    //             name: username
    //         }
    //     });
    //     return res.json(users);
    // },
};