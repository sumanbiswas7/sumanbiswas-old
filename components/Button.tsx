import styles from "./Button.module.scss";
import NextLink from "next/link";

interface Button {
  href: String | any;
  style: String;
  text: String;
}

export function Button(props: Button) {
  return (
    <a rel="noreferrer" target={"_blank"} href={props.href}>
      {props.style == "dark" ? (
        <button className={styles.button}>{props.text}</button>
      ) : (
        <button className={styles.button_light}>{props.text}</button>
      )}
    </a>
  );
}
