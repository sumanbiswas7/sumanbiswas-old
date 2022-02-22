import styles from "./NavButton.module.scss"

export function NavButton() {
  return (
    <div className={styles.navbar_button}>
      <div id={styles.line_top} className={styles.navbar_button_line}></div>
      <div className={styles.navbar_button_line}></div>
      <div id={styles.line_end} className={styles.navbar_button_line}></div>
    </div>
  );
}
