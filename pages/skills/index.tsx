import { NavButton } from "../../components/NavButton";
import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <div className={styles.main_container}>
      <NavButton />
      <div className={styles.pagename}>
        <p className={styles.pagename_name}>skills</p>
        <div className={styles.pagename_border} />
      </div>
      <div className={styles.img_container}>
        {/* <img
          className={styles.earth}
          src="https://sumanbiswas-website.s3.ap-south-1.amazonaws.com/skills/earth2.webp"
        /> */}
        <div className={styles.earth2} />
      </div>
    </div>
  );
}
