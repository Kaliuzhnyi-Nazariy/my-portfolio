import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h2>Hello, my dear!</h2>
      <p>
        I am happy that you are here on my page, where you can find more
        information about who I am and see my skill.
      </p>
      <p>
        First of all - my name is
        <b className={styles.emphasize}>Kaliuzhnyi Nazarii</b> and I am 18 years
        old. I am from Ukraine.
      </p>
      <p>
        I love coding (Frontend/fullstack development), sport, music and spend
        time reading book with coffee☕
      </p>
      <p>So don't lose time and check education and projects page😉</p>

      <div className={styles.isMobile}>
        <p>Here you can find: </p>
        <ul>
          <li>
            <Link to="/education">About my education</Link>
          </li>
          <li>
            <Link to="/projects">About my projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
