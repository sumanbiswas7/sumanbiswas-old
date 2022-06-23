import { NavButton } from "../../components/NavButton";
import styles from "./contact.module.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FiMail, FiFacebook, FiYoutube } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";

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
        <div className={styles.msg_box__contact_info}>
          <h3 className={styles.msg_box__contact_info__header}>Contact Info</h3>
          <ul className={styles.msg_box__contact_info__ul}>
            <li>
              <HiOutlineLocationMarker size={20} />
              <p>Tehatta, West Bengal, Nadia, India , 741160</p>
            </li>
            <li>
              <FiMail size={17} />
              <p>sumanbiswas842001@gmail.com</p>
            </li>
            <li>
              <BsTelephone size={16} />
              <p>+91 740-7992-473</p>
            </li>
          </ul>
          <div className={styles.msg_box__contact_info__links}>
            <a
              href="https://www.instagram.com/sumanbiswas7"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <BsInstagram size={15} />
            </a>
            <a
              href="https://github.com/sumanbiswas7"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <VscGithub size={17} />
            </a>
            <a
              href="https://www.facebook.com/people/Suman-Biswas/100009266254381/"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <FiFacebook size={17} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCHEga9OnhbdpHrpe72gawQw"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <FiYoutube size={17} />
            </a>
          </div>
        </div>
        <div className={styles.msg_box__message}>
          <form>
            <h4>Send a Message</h4>
            <input placeholder="Your Name" />
            <input placeholder="Your Email" />
            <textarea placeholder="Message" />
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
