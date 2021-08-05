import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { SearchBar } from "./SearchBar";
import { SideBar } from "./SideBar";

export function NavBar() {
  return (
    <div className={styles["nav-bar"]}>
      <section className={styles.left}>
        <span>Logo here</span>
      </section>
      <section>
        <SearchBar />
      </section>
      <section className={styles.right}>
        <SideBar />
      </section>
    </div>
  );
}
