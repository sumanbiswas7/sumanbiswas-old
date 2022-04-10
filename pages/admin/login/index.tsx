import styles from "./login.module.scss";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebase/app";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";

initializeApp(firebaseConfig);
export default function Login() {
  const router = useRouter();
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
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Signed In");
        router.replace("/admin/dashboard");
      } else {
        console.log("Not Signed In");
      }
    });
  }, [handleSubmit]);
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
