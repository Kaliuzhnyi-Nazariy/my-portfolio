import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.mainTitle}>Projects list</h2>

      <div className={styles.team}>
        <h4 className={styles.listTitle}>Team projects: </h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="https://parchello.github.io/PowerPulse/">
              <b>Power Pulse</b>
              <span style={{ marginLeft: "4px" }}>
                <i className={styles.arrow}></i>- click to see website
              </span>
            </a>
            <p>
              PowerPulse is your personal fitness assistant! Get personalized
              nutrition and exercise recommendations, achieve your goals, and
              maintain a healthy lifestyle. (Beta version)
            </p>
            <p className={styles.addInfo}>Role: Front-end developer</p>
            <p className={styles.addInfo}>
              Techs: HTML, CSS, REACT, JS,Redux/toolkit
            </p>
          </li>
          <li className={styles.listItem}>
            <a href="https://github.com/arteeeemt/project_12">
              <b>Bookshelf</b>{" "}
              <span style={{ marginLeft: "4px" }}>
                <i className={styles.arrow}></i>- click to see website
              </span>
            </a>
            <p>
              This is a bookshelf, where you can find some books than add it to
              cart and order it on different platforms.
            </p>
            <p className={styles.addInfo}>Role: Front-end developer</p>
            <p className={styles.addInfo}>Techs: HTML, CSS, JS, API</p>
          </li>
        </ul>
      </div>

      <div className={styles.solo}>
        <h4 className={styles.listTitle}>Solo projrcts: </h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a href="https://kaliuzhnyi-nazariy.github.io/news-feed/">
              <b>News-feed</b>{" "}
              <span style={{ marginLeft: "4px" }}>
                <i className={styles.arrow}></i>- click to see website
              </span>
            </a>
            <p>
              Do you need some news from different countries? You are welcome to
              visit this site. Here You can find weather forecast, and some news
              sorted by countries.
            </p>
            <p className={styles.addInfo}>Techs: HTML, CSS, JS, REACT, API</p>
          </li>
          <li className={styles.listItem}>
            <a href="https://kaliuzhnyi-nazariy.github.io/hangman-API/">
              <b>Hangman game</b>{" "}
              <span style={{ marginLeft: "4px" }}>
                <i className={styles.arrow}></i>- click to see website
              </span>
            </a>
            <p>
              Do you want play a little game? Here you are. I can recomend you
              hangman. Here you can choose topics or use randomizer. 😲
            </p>
            <p className={styles.addInfo}>
              Techs: HTML, CSS, TS, REACT, API, Styled-components, Redux/toolkit
            </p>
          </li>
          <li className={styles.listItem}>
            <a href="https://kaliuzhnyi-nazariy.github.io/goit-react-hw-08-phonebook/">
              <b>Phonebook</b>
              <span style={{ marginLeft: "4px" }}>
                <i className={styles.arrow}></i>- click to see website
              </span>
            </a>
            <p>
              Everyday people use their phone for making calls. So it's really
              important to have phonebook where you can save your numbers.
            </p>
            <p className={styles.addInfo}>
              Techs: HTML, CSS, TS, REACT, API, Styled-components, Redux/toolkit
            </p>
          </li>
          <li className={styles.listItem}>
            <a href="https://kaliuzhnyi-nazariy.github.io/e-commerce-shop/">
              <b>E-commerce shop</b>
              <span style={{ marginLeft: "4px" }}>
                <i className={styles.arrow}></i>- click to see website
              </span>
            </a>
            <p>
              Nowadays E-ceommerce is very popular. So it is one of the
              theoretical e-commerce shop website where you can add goods to
              cart and remove them from it.
            </p>
            <p className={styles.addInfo}>
              Techs: HTML, CSS, TS, REACT, API, Styled-components,
              Redux/toolkit, Bootstrap
            </p>
          </li>
          {/* <li className={styles.listItem}>
          <a href="https://kaliuzhnyi-nazariy.github.io/e-commerce-shop/">
            <b>IT-traveler</b>
            <span style={{ marginLeft: "4px" }}>
              <i className={styles.arrow}></i>- click to see website
            </span>
          </a>
          <p>
            IT-traveler it is a program for people who loves set some points on
            map where they back once. You can do it easily in this app
          </p>
          <p className={styles.addInfo}>
            Techs: HTML, CSS, JS, Vue.js, API, Styled-components, Redux/toolkit,
          </p>
        </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
