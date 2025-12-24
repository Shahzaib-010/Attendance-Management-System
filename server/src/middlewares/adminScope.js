export const requireAdminType = (...types) => {
  return (req, res, next) => {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        error: "Admin access required",
      });
    }

    if (!types.includes(req.user.adminType)) {
      return res.status(403).json({
        success: false,
        error: "Admin scope not allowed",
      });
    }

    next();
  };
};