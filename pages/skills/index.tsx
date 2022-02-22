import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <div className={styles.main_container}>
      <div className={styles.img_container}>
        <img className={styles.earth} src="./earth.svg" />
        {/* <img className={styles.planets} src="./skills_planets.svg" /> */}
        {/* <div className={styles.skills_container}>
          <div className={styles.skills_container_small}>
            <h4>Front end</h4>
            <div className={styles.skills_container_small_line}></div>
            <li>React Js</li>
            <li>Next Js</li>
            <li>Redux</li>
          </div>
          <div className={styles.skills_container_small}>
            <h4>Back end</h4>
            <div className={styles.skills_container_small_line}></div>
            <li>Node Js</li>
            <li>GraphQL</li>
            <li>Rest api</li>
          </div>
          <div className={styles.skills_container_small}>
            <h4>Languages</h4>
            <div className={styles.skills_container_small_line}></div>
            <li>Javascript</li>
            <li>Python</li>
            <li>Typescript</li>
          </div>
        </div> */}
      </div>
    </div>
  );
}
