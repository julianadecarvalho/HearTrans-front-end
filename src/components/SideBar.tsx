import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import { IconContext } from "react-icons";


export function SideBar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value={{ color: "light blue"}}>
        <div className={styles["navbar"]}>
            <Link to="#" className={styles["menu-bars"]}>
            <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            {/* <nav className={`${styles["nav-menu"]} ${sidebar ? " active" : ""}`}> */}
            <div className='navbar-menu is-active'>
            <ul className={styles["nav-menu-items"]} onClick={showSidebar}>
                <li className={styles["navbar-toggle"]}>
                <Link to="#" className={styles["menu-bars"]}>
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
            </div>
            {/* </nav> */}
        </div>
        </IconContext.Provider>
        </>
    );
}
