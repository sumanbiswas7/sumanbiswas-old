import { NavButton } from "../../components/NavButton";
import styles from "./football.module.scss";

export default function Football() {
  return (
    <div className={styles.main_container}>
      <NavButton />
      <div className={styles.container_1}>
        <img
          src="../hobbies/football/real_madrid_team.webp"
          className={styles.container_1_real_madrid_img}
        />
      </div>
      <div className={styles.container_2}>
        <div className={styles.container_2_text_container}>
          <p className={styles.container_2_text_container_text}>
            &ldquo;¡Hala Madrid! ...y nada más&rdquo; Proud to tell you I
            support the greatest club of the greatest sport
          </p>
          <p className={styles.container_2_text_container_text}>
            Football has always been special to me. Fortunate enough to grow up
            watching Cristiano Ronaldo &amp; Leo Messi. Being able to support
            Real Madrid, witnessing the legends... I can&apos;t tell you what an
            honor these are.
          </p>
        </div>
      </div>
    </div>
  );
}
