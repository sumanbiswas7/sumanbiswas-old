import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "../public/footer/footer_logo.svg";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.container_small}>
        <div className={styles.name_main_container}>
          <div className={styles.name_container}>
            <Image src={logo} width={40} height={40} />
            <h3 className={styles.name_container_name}>Suman Biswas</h3>
          </div>
          <div className={styles.icons_container}>
            <a
              href="https://github.com/sumanbiswas7"
              target={"_blank"}
              rel="noreferrer"
              className={styles.icons_container_icons}
            >
              <RiGithubLine
                size={17}
                id={styles.icon_1}
                className={styles.icons_container_icons_icon}
              />
            </a>
            <a
              href="https://www.instagram.com/sumanbiswas7/"
              target={"_blank"}
              rel="noreferrer"
              className={styles.icons_container_icons}
            >
              <BsInstagram
                size={17}
                id={styles.icon_1}
                className={styles.icons_container_icons_icon}
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009266254381"
              target={"_blank"}
              rel="noreferrer"
              className={styles.icons_container_icons}
            >
              <FaFacebookF
                size={17}
                id={styles.icon_1}
                className={styles.icons_container_icons_icon}
              />
            </a>
          </div>
        </div>
        <div className={styles.small_box_2}>
          <div className={styles.useful_link_container}>
            <a
              href="https://www.instagram.com/sumanbiswas7/"
              className={styles.useful_link}
              target={"_blank"}
              rel="noreferrer"
            >
              instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009266254381"
              className={styles.useful_link}
              target={"_blank"}
              rel="noreferrer"
            >
              facebook
            </a>
            <a
              href="https://wa.me/917407992473?text=<website>:"
              className={styles.useful_link}
              target={"_blank"}
              rel="noreferrer"
            >
              whatsapp
            </a>
            <a
              className={styles.useful_link}
              target={"_blank"}
              href="https://github.com/sumanbiswas7"
              rel="noreferrer"
            >
              github
            </a>
          </div>
          <div className={styles.useful_link_container}>
            <div className={styles.info_container}>
              <div className={styles.map_box}>
                <img src="./footer/india.svg" />
                <div className={styles.info_container_info}>
                  <p>Tehatta, India</p>
                  <p>+91-7407 9924 73</p>
                </div>
              </div>
              <div className={styles.email_container}>
                <MdEmail color="#ddd" size={20} />
                <p className={styles.email}>sumanbiswas842001@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small className={styles.copyright}>
        &copy; Copyright 2022, Suman Biswas
      </small>
    </footer>
  );
}
