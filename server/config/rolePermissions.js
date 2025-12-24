import { PERMISSIONS } from "./permissions.js";

export const ROLE_PERMISSIONS = {
  super_admin: Object.values(PERMISSIONS), // 🔥 full access

  admin_hr: [
    PERMISSIONS.VIEW_ALL_EMPLOYEES,
    PERMISSIONS.VIEW_HR_DATA,
    PERMISSIONS.CREATE_EMPLOYEE,
  ],

  admin_finance: [
    PERMISSIONS.VIEW_ALL_EMPLOYEES,
    PERMISSIONS.VIEW_SALARY,
  ],

  admin_dept: [
    PERMISSIONS.VIEW_DEPT_EMPLOYEES,
  ],

  user: [
    PERMISSIONS.VIEW_SELF,
  ],
};
