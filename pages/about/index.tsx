import styles from "./about.module.scss";
import { BsInstagram } from "react-icons/bs";
import { NavButton } from "../../components/NavButton";
import NextLink from "next/link";

export default function About() {
  return (
    <div className={styles.main_container}>
      <NavButton />
      <div className={styles.pagename}>
        <p className={styles.pagename_name}>about</p>
        <div className={styles.pagename_border} />
      </div>
      <img
        className={styles.top_left_tex}
        src="./about/about_top-left_tex.svg"
      />
      <img
        className={styles.buttom_right_tex}
        src="./about/about_buttom-right_tex.svg"
      />
      <div className={styles.about_text_container}>
        <h1 className={styles.about_text_container_header}>
          Simple kid who wants to <br />
          create awesome stuff -
        </h1>
        <p className={styles.about_text_container_para}>
          currently, a student. learning and developing new skills. some of my
          hobbies are football, photography, watching movies, cooking, and
          travelling. checkout my resume to know more about me
        </p>
        <div className={styles.about_text_container_icon_container}>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://www.instagram.com/sumanbiswas7/"
            className={styles.about_text_container_icon_container_icon}
          >
            <BsInstagram id={styles.ig} size={20} color="#c4c4c4" />
          </a>
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://drive.google.com/file/d/1gbo8yzCoMlM6foz54ZSEXhB4ApDX8YAY/view?usp=sharing"
          >
            <button
              className={styles.about_text_container_icon_container_resume_btn}
            >
              resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
