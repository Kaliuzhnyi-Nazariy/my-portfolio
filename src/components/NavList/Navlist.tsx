import { Link } from "react-router-dom";
import styles from "./NavList.module.css";

const Navlist = () => {
  return (
    <ul className={styles.listOfLinks}>
      <li className={styles.listItem}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.listItem}>
        <Link to="/education">Education</Link>
      </li>
      <li className={styles.listItem}>
        <Link to="/projects">Projects </Link>
      </li>
    </ul>
  );
};

export default Navlist;
