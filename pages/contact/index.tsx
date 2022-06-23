import { NavButton } from "../../components/NavButton";
import styles from "./contact.module.scss";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { FiMail, FiFacebook, FiYoutube } from "react-icons/fi";
import { VscGithub } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";
import { ChangeEvent, useState, useRef, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validate } from "email-validator";
import { initializeApp } from "firebase/app";
import { getDatabase, push, ref, onValue, set } from "firebase/database";
import { firebaseConfig } from "../../firebase/app";
import { CopyrightBig, CopyrightSmall } from "../../components/Copyright";

initializeApp(firebaseConfig);

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [views, setViews] = useState("---");
  const nameRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    updateViews();

    function updateViews() {
      const db = getDatabase();
      const starCountRef = ref(db, "views/");
      onValue(
        starCountRef,
        (snapshot) => {
          const data = snapshot.val();
          setViews(data.views);
          set(ref(getDatabase(), "/views"), {
            views: data.views + 1,
          });
        },
        { onlyOnce: true }
      );
    }
  }, []);

  function submitHandler(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    let name = nameRef.current?.value;
    let mail = mailRef.current?.value;
    let message = messageRef.current?.value;
    if (!name || !mail || !message) {
      toast.warning("Please fill the form correctly!");
      delaySetLoad(false);
      return;
    }
    console.log(validate(mail), mail);

    if (validate(mail) == false) {
      toast.error("Please provide a valid email");
      delaySetLoad(false);
      return;
    }

    const db = getDatabase();
    push(ref(db, "messages/"), {
      name,
      mail,
      message,
      date: moment(new Date()).format("DD-MM-YY, h:mm a"),
    })
      .then(() => {
        toast.success("Message sent successfully");
        console.log("Message sent successfully");
        delaySetLoad(false);
        nameRef.current!.value = "";
        mailRef.current!.value = "";
        messageRef.current!.value = "";
      })
      .catch((e) => {
        toast.error("Message not sent");
        delaySetLoad(false);
        console.log(e);
      });

    function delaySetLoad(bool: boolean) {
      setTimeout(() => {
        setSending(bool);
      }, 2000);
    }
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
      <div className={styles.main_container}>
        <NavButton />
        <div className={styles.pagename}>
          <p className={styles.pagename_name}>contact</p>
          <div className={styles.pagename_border} />
        </div>
        <div className={styles.main_container__container_1}></div>
        <div className={styles.main_container__container_2}>
          <CopyrightBig views={views} />
        </div>
        <div className={styles.msg_box}>
          <div className={styles.msg_box__contact_info}>
            <h3 className={styles.msg_box__contact_info__header}>
              Contact Info
            </h3>
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
            <CopyrightSmall views={views} />
          </div>
          <div className={styles.msg_box__message}>
            <form onSubmit={submitHandler}>
              <h4>Send a Message</h4>
              <input placeholder="Your Name" ref={nameRef} />
              <input placeholder="Your Email" ref={mailRef} />
              <textarea placeholder="Message" ref={messageRef} />
              <button disabled={sending}>
                {sending ? <PulseLoader color="#fff" size={4} /> : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
