const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            tipo: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            status: DataTypes.STRING,
            verificacao: DataTypes.STRING,
            forgot: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {}
}

module.exports = User;