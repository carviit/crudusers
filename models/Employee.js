const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const Employee = db.define("Employee", {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  role: {
    type: DataTypes.STRING,
    required: true,
  },
  salary: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Employee;
