// src/utils/permissions.js

import { ROLES } from "./constants";

export const PERMISSIONS = {
  VIEW_DASHBOARD: "view_dashboard",
  MANAGE_USERS: "manage_users",
  MANAGE_ROLES: "manage_roles",
  VIEW_REPORTS: "view_reports",
  MANAGE_SETTINGS: "manage_settings"
};

// Which role has which permissions
export const ROLE_PERMISSIONS = {
  [ROLES.SUPER_ADMIN]: [
    PERMISSIONS.VIEW_DASHBOARD,
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.MANAGE_ROLES,
    PERMISSIONS.VIEW_REPORTS,
    PERMISSIONS.MANAGE_SETTINGS
  ],

  [ROLES.ADMIN]: [
    PERMISSIONS.VIEW_DASHBOARD,
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.VIEW_REPORTS
  ],

  [ROLES.USER]: [
    PERMISSIONS.VIEW_DASHBOARD
  ]
};
