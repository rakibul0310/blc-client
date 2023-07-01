import React from "react";
import Page404 from "../../componentes/Common/Page404";

const StudentHome = React.lazy(() => import("./studentPages/StudentHome"));

// { path: '/user/logout', name: 'Logout', permission: ['user','admin'], component: Logout },
/****************************user routes *****************************************/
export const routers = [
  // Not Found Page
  {
    path: "*",
    exact: true,
    name: "Error",
    permission: ["student", "admin", "teacher"],
    component: Page404,
  },

  // Common Routes
  {
    path: "/profile",
    name: "Welcome",
    permission: ["user"],
    // component: MyProfile,
    exact: true,
  },
  {
    path: "/profile/my-profile",
    name: "My Profile",
    permission: ["user"],
    // component: MyProfile,
  },

  // User Dashboard
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    permission: ["student"],
    component: StudentHome,
  },
];
