import styles from "./NavBar.module.css";
import { SearchBar } from "./SearchBar";
import { SideBar } from "./SideBar";
import logo from "../images/heartranslogo.png";

export function NavBar(props: any) {
  return (
    <div className={styles["nav-bar"]}>
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={logo} alt="heartrans-logo" />
        </a>
      </div>
      <section className={`is-desktop ${styles["navbar-menu"]}`}>
        <div className="navbar-item">
          <SearchBar setNewCoords={props.setNewCoords} />
        </div>
      </section>
      <section className={styles.right}>
        <SideBar />
      </section>
    </div>
  );
}
