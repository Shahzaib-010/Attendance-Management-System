export const sameDepartmentOnly = (req, res, next) => {
  const userDept = req.user.department;
  const targetDept = req.params.department || req.body.department;

  if (req.user.role === "super_admin") return next();

  if (userDept !== targetDept) {
    return res.status(403).json({
      success: false,
      error: "Department access denied",
    });
  }

  next();
};