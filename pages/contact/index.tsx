import styles from "./contact.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import NextLink from "next/link";
export default function Contact() {
  return (
    <div className={styles.main_container}>
      <div className={styles.pagename}>
        <p className={styles.pagename_name}>contact</p>
        <div className={styles.pagename_border} />
      </div>
      <form className={styles.form}>
        <h3 className={styles.form_heading}>Contact Me</h3>
        <input
          type={"text"}
          placeholder="your name"
          className={styles.form_input}
        />
        <input
          type={"email"}
          placeholder="your email"
          className={styles.form_input}
        />
        <textarea
          placeholder="Message"
          className={`${styles.form_input} ${styles.form_message}`}
        />
        <div className={styles.form_flex}>
          <button className={styles.form_submit_btn}>Send</button>
          <div className={styles.form_flex_icons}>
            <NextLink href={"/"}>
              <div className={styles.form_icons_box}>
                <FiFacebook size={17} className={styles.form_icons_box_icon} />
              </div>
            </NextLink>
            <NextLink href={"/"}>
              <div className={styles.form_icons_box}>
                <FaInstagram size={17} className={styles.form_icons_box_icon} />
              </div>
            </NextLink>
            <NextLink href={"/"}>
              <div className={styles.form_icons_box}>
                <AiOutlineTwitter
                  size={17}
                  className={styles.form_icons_box_icon}
                />
              </div>
            </NextLink>
          </div>
        </div>
      </form>
    </div>
  );
}
