import styles from "./NavButton.module.scss";
import { useState } from "react";
import NextLink from "next/link";

export function NavButton() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal ? (
        <div className={styles.modal}>
          <NextLink href={"/"}>
            <div className={styles.modal_div}>
              <h2 className={styles.modal_div_page}>Home</h2>
            </div>
          </NextLink>
        </div>
      ) : null}
      {!modal ? (
        <button
          className={styles.navbar_button}
          onClick={() => setModal((p) => !p)}
        >
          <div id={styles.line_top} className={styles.navbar_button_line}></div>
          <div className={styles.navbar_button_line}></div>
          <div id={styles.line_end} className={styles.navbar_button_line}></div>
        </button>
      ) : (
        <button
          className={`${styles.navbar_button} ${styles.navbar_button_x}`}
          onClick={() => setModal((p) => !p)}
        >
          <div
            className={`${styles.navbar_button_line} ${styles.navbar_line_x}`}
          ></div>
          <div
            id={styles.line_end_x}
            className={styles.navbar_button_line}
          ></div>
        </button>
      )}
    </>
  );
}
