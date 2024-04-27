const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodeusers", "root", "0404", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Banco de dados MySql conectado!");
} catch (erro) {
  console.log(`Não foi possível conectar ao banco de dados, ERRO: ${error}`);
}

module.exports = sequelize;
