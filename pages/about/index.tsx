import styles from "./about.module.scss";
import { BsInstagram } from "react-icons/bs";

export default function About() {
  return (
    <div className={styles.main_container}>
      <img className={styles.top_left_tex} src="./about_top-left_tex.svg" />
      <img
        className={styles.buttom_right_tex}
        src="./about_buttom-right_tex.svg"
      />
      <div className={styles.about_text_container}>
        <h1 className={styles.about_text_container_header}>
          Simple kid who wants to <br />
          create awesome stuff -
        </h1>
        <p className={styles.about_text_container_para}>
          currently, a student. learning and developing new skills. some of my
          hobbies are football, photography, watching movies, cooking, and travelling. checkout
          my resume to know more about me
        </p>
        <div className={styles.about_text_container_icon_container}>
          <div className={styles.about_text_container_icon_container_icon}>
            <BsInstagram size={20} color="#c4c4c4" />
          </div>
          <button
            className={styles.about_text_container_icon_container_resume_btn}
          >
            resume
          </button>
        </div>
      </div>
    </div>
  );
}
