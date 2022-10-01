import styles from "./Loader.module.scss";
import { ProgressBar, InfinitySpin } from "react-loader-spinner";

export function Loader() {
  return (
    <div className={styles.main_container}>
      {/* <ProgressBar
        height="100"
        width="80"
        ariaLabel="progress-bar-loading"
        // wrapperClass="progress-bar-wrapper"
        borderColor="#222222"
        barColor="#333333"
      /> */}
      <InfinitySpin width="200" color="#333333" />
    </div>
  );
}
