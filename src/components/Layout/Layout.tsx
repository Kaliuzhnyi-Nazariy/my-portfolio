import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
// import Navlist from "../NavList/Navlist";

const Layout = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Link to="/">
          <h1>Kaliuzhnyi Nazarii</h1>
        </Link>
        {/* <Navlist /> */}
        <ul className={styles.listOfLinks}>
          <li className={styles.listItem}>
            <Link to="/" className={styles.linkText}>
              Home
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/education" className={styles.linkText}>
              Education
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/projects" className={styles.linkText}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <footer className={styles.footer}>
        <h2 className={styles.name}>Kaliuzhnyi Nazarii</h2>
        <div className={styles.gitHub}>
          <a href="https://github.com/Kaliuzhnyi-Nazariy">GitHub</a>
        </div>

        <div className={styles.phone}>
          Phone number: <a href="tel: +48692992748"> +48 692 992 748</a>
        </div>

        <div className={styles.email}>
          Email:
          <a href="mailto: kaliuzhnyinazariijob@gmail.com">
            kaliuzhnyinazariijob@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
