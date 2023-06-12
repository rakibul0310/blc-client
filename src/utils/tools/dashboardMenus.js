import { AiOutlineDashboard, AiOutlineWallet } from "react-icons/ai";
import { BsBook, BsJournalBookmarkFill } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";

export let dashboardMenus = [
  {
    id: "337fwedkf",
    menu: "Dashboard",
    icon: <AiOutlineDashboard />,
    route: "/dashboard",
    permission: ["user", "admin"],
  },
  {
    id: "7dfser8srf",
    menu: "Profile",
    icon: <FiUser />,
    permission: ["user"],
    dropdown: [
      {
        id: "8389r4ifd",
        menu: "My Profile",
        route: "/dashboard/profile/my-profile",
        permission: ["user"],
      },
      {
        id: "f7d8e8sfrw",
        menu: "Update Profile",
        route: "/dashboard/profile/update-profile",
        permission: ["user"],
      },
      {
        id: "sf7s8f5s8er",
        menu: "Update Password",
        route: "/dashboard/profile/update-password",
        permission: ["user"],
      },
      {
        id: "sfs4f8se8",
        menu: "Update Email",
        route: "/dashboard/profile/update-email",
        permission: ["user"],
      },
    ],
  },
  {
    id: "df79er8suf",
    menu: "Courses",
    icon: <BsBook />,
    permission: ["user"],
    dropdown: [
      {
        id: "r3er8re8sdf7dn",
        menu: "Enrolled Courses",
        route: "/dashboard/enrolled-courses",
        permission: ["user"],
      },
      {
        id: "fs7erw55s",
        menu: "All Courses",
        route: "/dashboard/all-courses",
        permission: ["user"],
      },
    ],
  },
  // {
  //   id: "f7df8sfd7f",
  //   menu: "Student Analytics",
  //   icon: <AiOutlineWallet />,
  //   route: "/dashboard/student-analytics",
  //   permission: ["user"],
  // },
  {
    id: "f7df8sfd7f",
    menu: "Order History",
    icon: <AiOutlineWallet />,
    route: "/dashboard/order-history",
    permission: ["user"],
  },
  {
    id: "f7df8sfd7f",
    menu: "Bookmarks",
    icon: <BsJournalBookmarkFill />,
    route: "/dashboard/bookmarks",
    permission: ["user"],
  },
  // {
  //   id: "f7df8sfd7f",
  //   menu: "Forum",
  //   icon: <AiOutlineWallet />,
  //   route: "/dashboard/forum",
  //   permission: ["user"],
  // },
  // {
  //   id: "f7df8sfd7f",
  //   menu: "Chat With Teacher",
  //   icon: <AiOutlineWallet />,
  //   route: "/dashboard/chat-with-teacher",
  //   permission: ["user"],
  // },
  {
    id: "vn3es6uru3sf7",
    menu: "support",
    icon: <MdOutlineSupportAgent />,
    permission: ["user"],
    dropdown: [
      {
        id: "sfs4f4s8e8r",
        menu: "updates",
        route: "/dashboard/support/updates",
        permission: ["user"],
      },
      {
        id: "vmj4dfs4f8sf",
        menu: "support ticket",
        route: "/dashboard/support/support-ticket",
        permission: ["user"],
      },
      {
        id: "vmj4de4ru4sf7s7",
        menu: "ticket history",
        route: "/dashboard/support/ticket-history",
        permission: ["user"],
      },
      {
        id: "f7s8f8fd",
        menu: "Contact Us",
        route: "/dashboard/support/contact-us",
        permission: ["user"],
      },
      {
        id: "w83grt32b",
        menu: "ContactUs History",
        route: "/dashboard/support/contact-us-history",
        permission: ["user"],
      },
    ],
  },
];
