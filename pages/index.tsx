import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import logo from "../public/logo.svg";
import { NavButton } from "../components/NavButton";
import { Button } from "../components/Button";
import { BsArrowDownCircle } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import About from "../pages/about/index";
import Skills from "../pages/skills/index";
import Hobbies from "./hobbies";
import Projects from "./projects";
import Contact from "./contact";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { FetchData } from "../ipdata/FetchData";

const Home: NextPage = () => {
  useEffect(() => {
    try {
      FetchData();
    } catch {
      return;
    }
  }, []);

  return (
    <div className={styles.pages_container}>
      <div className={styles.container}>
        <Head>
          <title>Suman Biswas</title>
          <meta name="sumanbiswas" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className={styles.navbar}>
          <div className={styles.navbar_logo}>
            <Image src={logo} width={60} height={60} />
          </div>
          <NavButton />
        </nav>
        <main className={styles.main}>
          <div className={styles.main_container}>
            <div className={styles.main_container_image_container_mobile}>
              <div
                id={styles.circle}
                className={styles.main_container_image_container_circle}
              >
                <img
                  className={styles.main_container_image_container_hero_img}
                  id={styles.hero_img}
                  src="./home/my_img.webp"
                />
              </div>
            </div>
            <div className={styles.main_container_text_container}>
              <h1 className={styles.main_container_text_container_header}>
                Suman <br /> Biswas.
              </h1>
              <h1
                className={styles.main_container_text_container_header_mobile}
              >
                Suman Biswas.
              </h1>
              <p className={styles.main_container_text_container_text_small}>
                sutdent, web &amp; app dev
              </p>
              <Button text="hire me" href="/contact" style="dark" />
              <Button
                text="resume"
                href="https://drive.google.com/file/d/1Y5zHzuHRS4Y7G3njoa2sUIjUoX0PyDbQ/view?usp=sharing"
                style="white"
              />
            </div>
            <div className={styles.main_container_image_container}>
              <div className={styles.main_container_image_container_circle}>
                <img
                  className={styles.main_container_image_container_hero_img}
                  src="./home/my_img.webp"
                />
              </div>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <BsArrowDownCircle
            className={styles.down_arrow}
            color="#333333"
            size={30}
          />
          <div className={styles.footer_contact_mail_container}>
            <a
              rel="noreferrer"
              target={"_blank"}
              href={"https://www.instagram.com/sumanbiswas7/"}
            >
              <AiFillInstagram
                className={styles.footer_contact_mail_container_icon}
                color="#333333"
                size={29}
              />
            </a>
            <a
              rel="noreferrer"
              target={"_blank"}
              href={"https://wa.me/917407992473?text=<website>:"}
            >
              <HiOutlineMail
                className={styles.footer_contact_mail_container_icon}
                color="#333333"
                size={30}
              />
            </a>
          </div>
        </footer>
      </div>
      <About />
      <Skills />
      <Hobbies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
