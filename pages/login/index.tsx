import styles from "./login.module.scss";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase/app";

initializeApp(firebaseConfig);
export default function Login() {
  const auth = getAuth();
  const [email, setEmail] = useState<any>();
  const [pass, setPass] = useState<any>();
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {})
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input
          onChange={(e) => setPass(e.target.value)}
          placeholder="password"
        />
        <button onClick={handleSubmit}>Go</button>
      </div>
    </div>
  );
}
