import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
import "./SideBar.module.css";
import { IconContext } from "react-icons";

export function SideBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{ color: 'light blue'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                </Link>
                </li>
                {Menu.map((page, index) => {
                return (
                    <li key={index} className={page.name}>
                    <Link to={page.path}>
                        {page.icon}
                        <span>{page.title}</span>
                    </Link>
                    </li>
                );
                })}
            </ul>
            </nav>
        </div>
        </IconContext.Provider>
        </>
    );
}
