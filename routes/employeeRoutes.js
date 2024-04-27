const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");

router.get("/add", EmployeeController.createEmployee);
router.post("/add", EmployeeController.createEmployeeSave);
router.post("/remove", EmployeeController.removeEmployee);
router.get("/edit/:id", EmployeeController.updateEmployee);
router.post("/edit", EmployeeController.updateEmployeePost);
router.get("/", EmployeeController.showEmployee);
router.get("/all", EmployeeController.showEmployee);

module.exports = router;
