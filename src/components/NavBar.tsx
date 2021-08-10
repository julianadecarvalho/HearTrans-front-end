import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { SearchBar } from "./SearchBar";
import { SideBar } from "./SideBar";
import  LocationAutocomplete  from "./LocationAutocomplete";


export default function NavBar() {
  return (
    <div className={styles["nav-bar"]}>
      <section className={styles.left}>
        <span>Logo here</span>
      </section>
      <section className={styles.left}>
        <p className="navbar-item">
          <SearchBar />
        </p>
        <p className="navbar-item">
          <LocationAutocomplete />
        </p>
        
      </section>
      <section className={styles.right}>
        <SideBar />
      </section>
    </div>
  );
}

