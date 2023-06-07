import {
  AiOutlineDashboard,
  AiOutlineToTop,
  AiOutlineWallet,
} from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiTeamLine, RiMoneyDollarCircleLine } from "react-icons/ri";

export let dashboardMenus = [
  {
    id: "337fwedkf",
    menu: "dashboard",
    icon: <AiOutlineDashboard />,
    route: "/dashboard",
    permission: ["user", "admin"],
  },
  {
    id: "7dfser8srf",
    menu: "profile",
    icon: <FiUser />,
    permission: ["user"],
    dropdown: [
      {
        id: "8389r4ifd",
        menu: "my profile",
        route: "/dashboard/profile/my-profile",
        permission: ["user"],
      },
      {
        id: "f7d8e8sfrw",
        menu: "Update profile",
        route: "/dashboard/profile/update-profile",
        permission: ["user"],
      },
      {
        id: "sf7s8f5s8er",
        menu: "Update password",
        route: "/dashboard/profile/update-password",
        permission: ["user"],
      },
      {
        id: "f7s5f8se8r",
        menu: "Update trx password",
        route: "/dashboard/profile/update-trxPassword",
        permission: ["user"],
      },
      {
        id: "sfs4f8se8",
        menu: "Update email",
        route: "/dashboard/profile/update-email",
        permission: ["user"],
      },
      {
        id: "d7f8wer8s",
        menu: "Update wallet",
        route: "/dashboard/profile/update-wallet",
        permission: ["user"],
      },
    ],
  },
  {
    id: "f7df8sfd7f",
    menu: "my wallet",
    icon: <AiOutlineWallet />,
    permission: ["user"],
    dropdown: [
      {
        id: "7854s8dfs5d",
        menu: "wallet",
        route: "/dashboard/wallet/my-wallet",
        permission: ["user"],
      },
      {
        id: "8s8dfdepser",
        menu: "deposit fund",
        icon: <RiMoneyDollarCircleLine />,
        route: "/dashboard/wallet/deposit-fund",
        permission: ["user"],
      },
      {
        id: "fd7d8s48574",
        menu: "deposit history",
        route: "/dashboard/wallet/deposit-history",
        permission: ["user"],
      },
      // {
      //   id: "348gfb74q3749g",
      //   menu: "Fund Receiving History",
      //   route: "/dashboard/wallet/fund-receiving-history",
      //   permission: ["user"],
      // },
    ],
  },
  {
    id: "df79er8suf",
    menu: "team",
    icon: <RiTeamLine />,
    permission: ["user"],
    dropdown: [
      {
        id: "r3er8re8sdf7dn",
        menu: "direct team",
        route: "/dashboard/team/direct-team",
        permission: ["user"],
      },
      {
        id: "fs7erw55s",
        menu: "level team",
        route: "/dashboard/team/level-team",
        permission: ["user"],
      },
    ],
  },
  {
    id: "m5vko5f5sfo3s5f",
    menu: "Top up",
    icon: <AiOutlineToTop />,
    permission: ["user"],
    dropdown: [
      {
        id: "fnd5fhs5or5f",
        menu: "topup account",
        route: "/dashboard/topup/topup-account",
        permission: ["user"],
      },
      {
        id: "vnzs5dajio5df8",
        menu: "topup history",
        route: "/dashboard/topup/topup-history",
        permission: ["user"],
      },
      // {
      //   id: "vnz5s45dajio5df8",
      //   menu: "Upgrade Auto Pool",
      //   route: "/dashboard/topup/upgrade-autopool",
      //   permission: ["user"],
      // },
      // {
      //   id: "vnzsdaj42iodf8",
      //   menu: "Upgrade Auto Pool history",
      //   route: "/dashboard/topup/upgrade-autopool-history",
      //   permission: ["user"],
      // },
      {
        id: "3t87ghq7q829h4g9q",
        menu: "Booster Upgrade",
        route: "/dashboard/topup/booster-income",
        permission: ["user"],
      },
      {
        id: "23gf43wg4g",
        menu: "Booster Upgrade history",
        route: "/dashboard/topup/upgrade-Booster-history",
        permission: ["user"],
      },
    ],
  },
  {
    id: "fsfsfusf8se4r",
    menu: "earning",
    icon: <GiTakeMyMoney />,
    permission: ["user"],
    dropdown: [
      {
        id: "ha4db4vds4bd3h",
        menu: "Earning statistics",
        route: "/dashboard/earnings/earning-statistics",
        permission: ["user"],
      },
      {
        id: "e7rfs5fs4532nbv",
        menu: "Direct Income",
        route: "/dashboard/earnings/direct-income",
        permission: ["user"],
      },
      {
        id: "e7rfs5fs25gsenbv",
        menu: "Indirect Income",
        route: "/dashboard/earnings/indirect-income",
        permission: ["user"],
      },
      {
        id: "f7e4rf34234fwre223se5rp",
        menu: "Auto Pool income",
        route: "/dashboard/earnings/auto-pool-income",
        permission: ["user"],
      },
      {
        id: "347g287bq2783ae",
        menu: "Bonanza income",
        route: "/dashboard/earnings/bonanza-reward-income",
        permission: ["user"],
      },
      {
        id: "f7fbc452bcwf424f5d",
        menu: "Income Level Update",
        route: "/dashboard/earnings/income-level-update",
        permission: ["user"],
      },
      {
        id: "f7ewt3rfs4e44s3rp",
        menu: "Direct Withdraw Income",
        route: "/dashboard/earnings/direct-withdraw-income",
        permission: ["user"],
      },
      {
        id: "f7er24f34ser425p",
        menu: "Booster income",
        route: "/dashboard/earnings/booster-income",
        permission: ["user"],
      },
      {
        id: "f47erf3swer44er25p",
        menu: "Gift income",
        route: "/dashboard/earnings/gift-income",
        permission: ["user"],
      },
      // {
      //   id: "f47er452f3se4r25p",
      //   menu: "Royalty income",
      //   route: "/dashboard/earnings/royalty-income",
      //   permission: ["user"],
      // },
    ],
  },
  {
    id: "bv2sre2ws7sf",
    menu: "withdraw",
    icon: <BiTransfer />,
    permission: ["user"],
    dropdown: [
      {
        id: "vv4mk4ufi4sf",
        menu: "withdraw funds",
        route: "/dashboard/withdraw/withdraw-fund",
        permission: ["user"],
      },
      {
        id: "vn2sff47s7f7d",
        menu: "withdraw history",
        route: "/dashboard/withdraw/withdraw-history",
        permission: ["user"],
      },
    ],
  },
  {
    id: "b4v2sr4e2ws7s5f",
    menu: "Fund Transfer",
    icon: <BiTransfer />,
    permission: ["user"],
    dropdown: [
      {
        id: "47qg4gf734q34vq3",
        menu: "User Top Up",
        route: "/dashboard/fund/top-up",
        permission: ["user"],
      },
      {
        id: "3q08gh93q9r3q",
        menu: "User Top Up History",
        route: "/dashboard/fund/top-up-history",
        permission: ["user"],
      },
      {
        id: "sfs57e4fewr8s8e5r",
        menu: "Fund Transfer ",
        route: "/dashboard/fund/fund-transfer",
        permission: ["user"],
      },
      {
        id: "sfs337er8s834gw3er",
        menu: "Fund Transfer History",
        route: "/dashboard/fund/fund-transfer-history",
        permission: ["user"],
      },
    ],
  },
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
