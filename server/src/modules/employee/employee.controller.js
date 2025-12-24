import { createEmployee } from "./employee.service.js";

export const createEmployeeController = async (req, res, next) => {
  try {
    const employee = await createEmployee(req.body);
    res.status(201).json({
      success: true,
      data: employee
    });
  } catch (err) {
    next(err);
  }
};
