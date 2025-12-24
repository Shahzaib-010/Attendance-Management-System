import { ROLE_PERMISSIONS } from "../config/rolePermissions.js";

const authorize = (requiredPermission) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { role, adminType } = req.user;

    const roleKey =
      role === "admin" ? `admin_${adminType}` : role;

    const permissions = ROLE_PERMISSIONS[roleKey] || [];

    if (!permissions.includes(requiredPermission)) {
      return res.status(403).json({
        error: "Access denied",
      });
    }

    next();
  };
};

export default authorize;
