import { Card } from "../../components/Card";
import { NavButton } from "../../components/NavButton";
import styles from "./hobbies.module.scss";

export default function Hobbies() {
  return (
    <div className={styles.main_container}>
      <NavButton />
      <div className={styles.pagename}>
        <p className={styles.pagename_name}>hobbies</p>
        <div className={styles.pagename_border} />
      </div>
      <div className={styles.photography_bg} />
      <div className={styles.img_shadow} />
      <Card
        last={false}
        link="https://www.instagram.com/sumanbiswas7/"
        name="Photography"
        img="./hobbies/photography.svg"
      />
      <Card
        last={true}
        link="/hobbies/football"
        name="Football"
        img="./hobbies/football.svg"
      />
    </div>
  );
}
