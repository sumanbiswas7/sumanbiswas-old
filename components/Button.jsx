import styles from "./Button.module.scss";
import NextLink from "next/link";

export function Button(props) {
  return (
    <NextLink href={props.href}>
      {props.style == "dark" ? (
        <button className={styles.button}>{props.text}</button>
      ) : (
        <button className={styles.button_light}>{props.text}</button>
      )}
    </NextLink>
  );
}
