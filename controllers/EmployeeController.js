const Employee = require("../models/Employee");

module.exports = class EmployeeController {
  static createEmployee(req, res) {
    res.render("employees/create");
  }

  static async createEmployeeSave(req, res) {
    const { name, role, salary } = req.body;

    const salaryFloat = parseFloat(salary.replace(",", "."));

    await Employee.create({ name, role, salary: salaryFloat });

    res.redirect("/employees");
  }

  static async showEmployee(req, res) {
    const employees = await Employee.findAll({ raw: true });

    res.render("employees/all", { employees });
  }

  static async removeEmployee(req, res) {
    const id = req.body.id;

    await Employee.destroy({ where: { id: id } });

    res.redirect("/employees");
  }

  static async updateEmployee(req, res) {
    const id = req.params.id;

    const employee = await Employee.findOne({ where: { id: id }, raw: true });

    res.render("employees/edit", { employee });
  }

  static async updateEmployeePost(req, res) {
    const id = req.body.id;

    const employee = {
      name: req.body.name,
      role: req.body.role,
      salary: req.body.salary,
    };

    await Employee.update(employee, { where: { id: id } });

    res.redirect("/employees");
  }
};
