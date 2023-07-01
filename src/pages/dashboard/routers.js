import React from "react";
import Page404 from "../../componentes/Common/Page404";
const ProfileUpdate = React.lazy(() =>
  import("../../componentes/Dashboard/Common/Profile/ProfileUpdate")
);
const EmailUpdate = React.lazy(() =>
  import("../../componentes/Dashboard/Common/Profile/EmailUpdate")
);
const PasswordUpdate = React.lazy(() =>
  import("../../componentes/Dashboard/Common/Profile/PasswordUpdate")
);

const StudentHome = React.lazy(() => import("./studentPages/StudentHome"));
const MyProfile = React.lazy(() =>
  import("../../componentes/Dashboard/Common/Profile/MyProfile")
);

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
    name: "My Profile",
    permission: ["student", "admin", "teacher"],
    component: MyProfile,
    exact: true,
  },
  {
    path: "/profile/my-profile",
    name: "My Profile",
    permission: ["student", "teacher", "admin"],
    component: MyProfile,
  },
  {
    path: "/profile/update-profile",
    name: "My Profile",
    permission: ["student", "teacher", "admin"],
    component: ProfileUpdate,
  },
  {
    path: "/profile/update-email",
    name: "My Profile",
    permission: ["student", "teacher", "admin"],
    component: EmailUpdate,
  },
  {
    path: "/profile/update-password",
    name: "My Profile",
    permission: ["student", "teacher", "admin"],
    component: PasswordUpdate,
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
