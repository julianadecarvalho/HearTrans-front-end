import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { SearchBar } from "./SearchBar";
import { SideBar } from "./SideBar";

export function NavBar() {
  return (
    <div className={styles["nav-bar"]}>
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <span>Logo here</span>
        </a>
      </div>
      <section className="navbar-menu">
        <div className="navbar-item">
        <SearchBar />
        </div>
      </section>
      <section className={styles.right}>
        <SideBar />
      </section>
    </div>
  );
}
