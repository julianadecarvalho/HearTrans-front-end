import * as FaIcons from "react-icons/fa";
import * as GoIcons from "react-icons/go";

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
  }
];
