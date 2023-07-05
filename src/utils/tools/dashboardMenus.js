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
    permission: ["student", "admin", "teacher"],
  },
  {
    id: "7dfser8srf",
    menu: "Profile",
    icon: <FiUser />,
    permission: ["student", "teacher"],
    dropdown: [
      {
        id: "8389r4ifd",
        menu: "My Profile",
        route: "/dashboard/profile/my-profile",
        permission: ["student", "teacher"],
      },
      {
        id: "f7d8e8sfrw",
        menu: "Update Profile",
        route: "/dashboard/profile/update-profile",
        permission: ["student", "teacher"],
      },
      {
        id: "sf7s8f5s8er",
        menu: "Update Password",
        route: "/dashboard/profile/update-password",
        permission: ["student", "teacher"],
      },
      {
        id: "sfs4f8se8",
        menu: "Update Email",
        route: "/dashboard/profile/update-email",
        permission: ["student", "teacher"],
      },
    ],
  },
  {
    id: "df79er8suf",
    menu: "Courses",
    icon: <BsBook />,
    permission: ["student", "teacher"],
    dropdown: [
      {
        id: "r3er8re8sdf7dn",
        menu: "My Courses",
        route: "/dashboard/courses/my-courses",
        permission: ["student", "teacher"],
      },
      {
        id: "fs7erw55s",
        menu: "All Courses",
        route: "/dashboard/courses/all-courses",
        permission: ["student", "teacher"],
      },
    ],
  },
  // {
  //   id: "f7df8sfd7f",
  //   menu: "Student Analytics",
  //   icon: <AiOutlineWallet />,
  //   route: "/dashboard/student-analytics",
  //   permission: ["student"],
  // },
  {
    id: "f7df8sfd7fk5",
    menu: "Order History",
    icon: <AiOutlineWallet />,
    route: "/dashboard/payment-history",
    permission: ["student"],
  },
  {
    id: "f7df8sfd7fk",
    menu: "Payment History",
    icon: <AiOutlineWallet />,
    route: "/dashboard/payment-history",
    permission: ["teacher"],
  },
  {
    id: "f7df8sfd7fk",
    menu: "All Payment History",
    icon: <AiOutlineWallet />,
    route: "/dashboard/payment-history",
    permission: ["admin"],
  },
  {
    id: "f7df8sfd7f",
    menu: "Bookmarks",
    icon: <BsJournalBookmarkFill />,
    route: "/dashboard/bookmarks",
    permission: ["student"],
  },
  // {
  //   id: "f7df8sfd7f",
  //   menu: "Forum",
  //   icon: <AiOutlineWallet />,
  //   route: "/dashboard/forum",
  //   permission: ["student"],
  // },
  // {
  //   id: "f7df8sfd7f",
  //   menu: "Chat With Teacher",
  //   icon: <AiOutlineWallet />,
  //   route: "/dashboard/chat-with-teacher",
  //   permission: ["student"],
  // },
  {
    id: "vn3es6uru3sf7",
    menu: "support",
    icon: <MdOutlineSupportAgent />,
    permission: ["student"],
    dropdown: [
      {
        id: "sfs4f4s8e8r",
        menu: "updates",
        route: "/dashboard/support/updates",
        permission: ["student"],
      },
      {
        id: "vmj4dfs4f8sf",
        menu: "support ticket",
        route: "/dashboard/support/support-ticket",
        permission: ["student"],
      },
      {
        id: "vmj4de4ru4sf7s7",
        menu: "ticket history",
        route: "/dashboard/support/ticket-history",
        permission: ["student"],
      },
      // {
      //   id: "f7s8f8fd",
      //   menu: "Contact Us",
      //   route: "/dashboard/support/contact-us",
      //   permission: ["student"],
      // },
      // {
      //   id: "w83grt32b",
      //   menu: "ContactUs History",
      //   route: "/dashboard/support/contact-us-history",
      //   permission: ["student"],
      // },
    ],
  },
];
