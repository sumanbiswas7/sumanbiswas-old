import styles from "./contact.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineTwitter } from "react-icons/ai";
import NextLink from "next/link";
import { NavButton } from "../../components/NavButton";
import { useRef, useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase/app";
import MoonLoader from "react-spinners/MoonLoader";
initializeApp(firebaseConfig);

export default function Contact() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [load, setLoad] = useState(false);
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    let name = nameRef.current?.value;
    let email = emailRef.current?.value;
    let message = messageRef.current?.value;
    if (!name || !email || !message) {
      toast.info("Please fill the form correctly!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("Please fill the form correctly");
    } else {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(validRegex)) {
        setLoad(true);
        const db = getDatabase();
        push(ref(db, "messages/"), {
          name,
          email,
          message,
        })
          .then(() => {
            toast.success("Message sent successfully", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setLoad(false);
            console.log("Message sent successfully");
            emailRef.current!.style.outlineColor = "#000";
            nameRef.current!.value = "";
            emailRef.current!.value = "";
            messageRef.current!.value = "";
          })
          .catch((e) => {
            toast.error("Message not sent", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setLoad(false);
            console.log(e);
          });
      } else {
        emailRef.current?.focus();
        emailRef.current!.style.outlineColor = "#cf3a3a";
        toast.warn("Please provide a valid email", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("please use a valid email");
      }
    }
  }

  return (
    <div className={styles.main_container}>
      <NavButton />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.pagename}>
        <p className={styles.pagename_name}>contact</p>
        <div className={styles.pagename_border} />
      </div>
      <form className={styles.form}>
        {!load ? (
          <>
            <h3 className={styles.form_heading}>Contact Me</h3>
            <input
              ref={nameRef}
              type={"text"}
              placeholder="your name"
              className={styles.form_input}
            />
            <input
              ref={emailRef}
              type={"email"}
              placeholder="your email"
              className={styles.form_input}
            />
            <textarea
              ref={messageRef}
              placeholder="Message"
              className={`${styles.form_input} ${styles.form_message}`}
            />
            <div className={styles.form_flex}>
              <button onClick={handleSubmit} className={styles.form_submit_btn}>
                Send
              </button>
              <div className={styles.form_flex_icons}>
                <NextLink
                  href={
                    "https://www.facebook.com/profile.php?id=100009266254381"
                  }
                >
                  <div className={styles.form_icons_box}>
                    <FiFacebook
                      size={17}
                      className={styles.form_icons_box_icon}
                    />
                  </div>
                </NextLink>
                <NextLink href={"https://www.instagram.com/sumanbiswas7/"}>
                  <div className={styles.form_icons_box}>
                    <FaInstagram
                      size={17}
                      className={styles.form_icons_box_icon}
                    />
                  </div>
                </NextLink>
                <NextLink href={"https://twitter.com/SumanBi20341056"}>
                  <div className={styles.form_icons_box}>
                    <AiOutlineTwitter
                      size={17}
                      className={styles.form_icons_box_icon}
                    />
                  </div>
                </NextLink>
              </div>
            </div>
          </>
        ) : (
          <MoonLoader />
        )}
      </form>
    </div>
  );
}
