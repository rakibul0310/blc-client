import React from "react";
import Page404 from "../../componentes/Common/Page404";
const MyCourses = React.lazy(() => import("./common/Courses/MyCourses"));
const AllCourses = React.lazy(() =>
  import("../dashboard/common/Courses/AllCourses")
);

const ProfileUpdate = React.lazy(() =>
  import("../../pages/dashboard/common/Profile/ProfileUpdate")
);
const EmailUpdate = React.lazy(() =>
  import("../../pages/dashboard/common/Profile/EmailUpdate")
);
const PasswordUpdate = React.lazy(() =>
  import("../../pages/dashboard/common/Profile/PasswordUpdate")
);

const StudentHome = React.lazy(() => import("./studentPages/StudentHome"));
const MyProfile = React.lazy(() =>
  import("../../pages/dashboard/common/Profile/MyProfile")
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

  // Profile
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

  // Courses
  {
    path: "/courses",
    name: "My Courses",
    permission: ["student", "teacher"],
    component: MyCourses,
  },
  {
    path: "/courses/my-courses",
    name: "My Courses",
    permission: ["student", "teacher"],
    component: MyCourses,
  },
  {
    path: "/courses/all-courses",
    name: "All Courses",
    permission: ["student", "teacher", "admin"],
    component: AllCourses,
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
