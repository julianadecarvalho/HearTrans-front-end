import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";
import * as BiIcons from "react-icons/bi";

export const Menu = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
    name: "menu-text",
  },
  {
    title: "Add Location",
    path: "/addlocation",
    icon: <GoIcons.GoLocation />,
    name: "menu-text",
  },
  {
    title: "Add Provider",
    path: "/addprovider",
    icon: <FaIcons.FaUserNurse />,
    name: "menu-text",
  },
  {
    title: "Report",
    path: "/report",
    icon: <GoIcons.GoReport />,
    name: "menu-text",
  },
  {
    title: "Donate",
    path: "/donate",
    icon: <BiIcons.BiDonateHeart />,
    name: "menu-text",
  },
];
