import styles from "./NextButton.module.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSwiper } from "swiper/react";

export function NextButton() {
  const swiper = useSwiper();
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => swiper.slidePrev()}>
        <IoIosArrowBack color="#fff" size={40} />
      </button>
      <button className={styles.button} onClick={() => swiper.slideNext()}>
        <IoIosArrowForward color="#fff" size={40} />
      </button>
    </div>
  );
}
