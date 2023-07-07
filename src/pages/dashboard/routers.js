import React from "react";
import Page404 from "../../componentes/Common/Page404";
const SupportTicket = React.lazy(() =>
  import("./common/Supports/SupportTicket")
);
const TicketHistory = React.lazy(() =>
  import("./common/Supports/TicketHistory")
);
const Updates = React.lazy(() => import("./common/Supports/Updates"));
const MyCourse = React.lazy(() => import("./studentPages/MyCourse"));
const Bookmarks = React.lazy(() => import("./studentPages/Bookmarks"));
const OrderHistory = React.lazy(() => import("./common/OrderHistory"));
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
  // Transactions
  {
    path: "/payment-history",
    exact: true,
    name: "Payment History",
    permission: ["student", "teacher", "admin"],
    component: OrderHistory,
  },
  // Supports
  {
    path: "/support/support-ticket",
    exact: true,
    name: "Support Ticket",
    permission: ["student", "teacher", "admin"],
    component: SupportTicket,
  },
  {
    path: "/support/ticket-history",
    exact: true,
    name: "Support Ticket History",
    permission: ["student", "teacher"],
    component: TicketHistory,
  },
  {
    path: "/support/updates",
    exact: true,
    name: "Updates",
    permission: ["student", "teacher", "admin"],
    component: Updates,
  },

  // User Dashboard
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    permission: ["student"],
    component: StudentHome,
  },
  {
    path: "/bookmarks",
    exact: true,
    name: "Bookmarks",
    permission: ["student"],
    component: Bookmarks,
  },
  {
    path: "/courses/my-courses/:id",
    name: "Course",
    permission: ["student"],
    component: MyCourse,
  },

  // Teacher Dashboard
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    permission: ["teacher"],
    component: StudentHome,
  },

  // Admin Dashboard
  {
    path: "/",
    exact: true,
    name: "Dashboard",
    permission: ["admin"],
    component: StudentHome,
  },
];
