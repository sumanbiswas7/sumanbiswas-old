import { Card } from "../../components/Card";
import styles from "./hobbies.module.scss";

export default function Hobbies() {
  return (
    <div className={styles.main_container}>
      <div className={styles.photography_bg} />
      <div className={styles.img_shadow} />
      <Card
        last={false}
        link="/"
        name="Photography"
        img="./hobbies/photography.png"
      />
      <Card last={true} link="/" name="Football" img="./hobbies/football.png" />
    </div>
  );
}
