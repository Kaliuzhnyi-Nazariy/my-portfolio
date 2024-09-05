import styles from "./Education.module.css";

const Education = () => {
  return (
    <div className={styles.container}>
      <h2>Education</h2>
      <p>
        Currently I am a forth-year student in
        <a href="https://ktkt.stu.cn.ua" className={styles.link}>
          Separated Subdivision "Applied College of Transport and Computer
          Technology of Chernihiv Polytechnic National University"
        </a>
        . I am studying Computer engineering since 2021.
      </p>
      <p>
        Beside this styduing I am also accomplished IT course as a fullstack
        developer in
        <a href="https://goit.global/us/" className={styles.link}>
          GoIT school
        </a>
        . After ending this school I received my
        <a
          href=" https://drive.google.com/file/d/1LgiHjI2-8qOrWezxyft3LOvRwpoaizNm/view?usp=drive_link"
          className={styles.link}
        >
          certificate
        </a>
        .
      </p>
      <p>
        After finishing GoIT school I continued study a lot of technologies.
        I've learned TypeScript and Vue. Learn how to use Nuxt.js and Next.js
        and so on...
      </p>
    </div>
  );
};

export default Education;
