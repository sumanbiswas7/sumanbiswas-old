import NextLink from "next/link";
import styles from "./Card.module.scss";

interface Card {
  img: String | any;
  link: String | any;
  name: String;
  last: Boolean;
}

export function Card(props: Card) {
  return (
    <div className={styles.container}>
      <img src={props.img} className={styles.hobby_icon} />
      <h4 className={styles.hobby_name}>{props.name}</h4>
      <NextLink href={props.link}>
        <button className={styles.button}>explore</button>
      </NextLink>
      {props.last ? (
        <img src="./hobbies/plants.webp" className={styles.plant} />
      ) : null}
    </div>
  );
}
