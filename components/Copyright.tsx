import styles from "./Copyright.module.scss";
import { AiFillEye } from "react-icons/ai";

export function CopyrightSmall({ views }: { views: string }) {
  return (
    <div className={styles.copy_footer}>
      <span className={styles.copy_footer__text}>
        &copy; Suman Biswas, 2022
      </span>
      <div className={styles.copy_footer__icon_box}>
        <AiFillEye style={{ marginRight: 2 }} color="#fff" size={15} />
        {views || "------"}
      </div>
    </div>
  );
}

export function CopyrightBig({ views }: { views: string }) {
  return (
    <div className={styles.big_copy_footer}>
      <span className={styles.big_copy_footer__text}>
        &copy; Suman Biswas, 2022
      </span>
      <div className={styles.big_copy_footer__icon_box}>
        <AiFillEye style={{ marginRight: 2 }} color="#fff" size={15} />
        {views || "------"}
      </div>
    </div>
  );
}
