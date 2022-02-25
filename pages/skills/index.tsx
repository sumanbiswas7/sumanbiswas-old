import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <div className={styles.main_container}>
      <div className={styles.pagename}>
        <p className={styles.pagename_name}>skills</p>
        <div className={styles.pagename_border} />
      </div>
      <div className={styles.img_container}>
        <img className={styles.earth} src="./skills/earth2.webp" />
      </div>
    </div>
  );
}
