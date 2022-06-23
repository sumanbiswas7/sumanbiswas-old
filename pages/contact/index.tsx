import { NavButton } from "../../components/NavButton";
import styles from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.main_container}>
      <NavButton />
      <div className={styles.pagename}>
        <p className={styles.pagename_name}>contact</p>
        <div className={styles.pagename_border} />
      </div>
      <div className={styles.main_container__container_1}></div>
      <div className={styles.main_container__container_2}></div>
      <div className={styles.msg_box}>
        <div className={styles.msg_box__contact_info}></div>
        <div className={styles.msg_box__message}></div>
      </div>
    </div>
  );
}
