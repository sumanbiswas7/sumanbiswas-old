import styles from "./NavButton.module.scss";
import { useState } from "react";
import NextLink from "next/link";

export function NavButton() {
  const [modal, setModal] = useState(false);
  return (
    <>
      {modal ? (
        <div className={styles.modal}>
          <div className={styles.modal_link_container}>
            <NextLink href={"/"}>
              <div className={styles.modal_div}>
                <h2 className={styles.modal_div_page}>
                  {" "}
                  <span>01 &nbsp;</span>Home
                </h2>
              </div>
            </NextLink>
            <NextLink href={"/about"}>
              <div className={styles.modal_div}>
                <h2 className={styles.modal_div_page}>
                  <span>02 &nbsp;</span>About
                </h2>
              </div>
            </NextLink>
            <NextLink href={"/skills"}>
              <div className={styles.modal_div}>
                <h2 className={styles.modal_div_page}>
                  <span>03 &nbsp;</span>Skills
                </h2>
              </div>
            </NextLink>
            <NextLink href={"/hobbies"}>
              <div className={styles.modal_div}>
                <h2 className={styles.modal_div_page}>
                  <span>04 &nbsp;</span>Hobbies
                </h2>
              </div>
            </NextLink>
            <NextLink href={"/projects"}>
              <div className={styles.modal_div}>
                <h2 className={styles.modal_div_page}>
                  <span>05 &nbsp;</span>Projects
                </h2>
              </div>
            </NextLink>
            <NextLink href={"/contact"}>
              <div className={styles.modal_div}>
                <h2 className={styles.modal_div_page}>
                  <span>06 &nbsp;</span>Contact
                </h2>
              </div>
            </NextLink>
          </div>
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
