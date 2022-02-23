import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <div className={styles.main_container}>
      <div className={styles.img_container}>
        <img className={styles.earth} src="./earth.svg" />
      </div>
    </div>
  );
}
