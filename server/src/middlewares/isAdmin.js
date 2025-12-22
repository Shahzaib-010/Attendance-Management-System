const isAdmin = (req, res, next) => {
  console.log("👮 IS ADMIN CHECK:", req.user);

  if (!req.user || req.user.role !== "admin") {
    return res.status(403).json({
      success: false,
      error: "Access denied. Admin only.",
    });
  }

  next();
};

export default isAdmin;
