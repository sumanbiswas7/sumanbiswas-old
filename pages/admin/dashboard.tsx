import { Logins } from "../../components/LogIns";
import { Message } from "../../components/Message";
import styles from "./dashboard.module.scss";
import { useEffect, useState } from "react";
import { firebaseConfig } from "../../firebase/app";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../login";
initializeApp(firebaseConfig);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
  } else {
    // User is signed out
  }
});
interface User {
  key: String;
  data: {
    date: String;
    info: {
      city: String;
      flag: String;
      country_name: String;
      continent_name: String;
      postal: String;
    };
  };
}
export default function Dashboard() {
  const [user, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const users: any = [];
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            users.push({ key: childKey, data: childData });
          });
          setUsers(users.reverse());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    get(child(dbRef, `messages/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const messages: any = [];
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            messages.push({ key: childKey, data: childData });
          });
          setMessages(messages.reverse());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      {auth.currentUser ? (
        <div className={styles.main_container}>
          <div className={styles.sub_container_1}>
            <img
              className={styles.sub_container_1_admin_img}
              src="https://sumanbiswas-website.s3.ap-south-1.amazonaws.com/PicsArt_02-02-11.11.11.jpg"
            />
            <p className={styles.sub_container_1_admin_name}>Suman Biswas</p>
            <div className={styles.line} />
            <p className={styles.sub_container_1_admin_type}>Owner</p>
            <div className={styles.line} />
            <div className={styles.notification_container}>
              {/* <div className={styles.notification_container_div}>6</div> */}
              <p className={styles.notification_container_message}>Messages</p>
            </div>
            <div className={styles.line} />
            <button className={styles.sub_container_1_logout}>Log out</button>
          </div>
          <div className={styles.sub_container_2}>
            <div className={styles.pagename}>
              <p className={styles.pagename_name}>admin</p>
              <div className={styles.pagename_border} />
            </div>
            <div className={styles.sub_container_2_main}>
              <div className={styles.sub_container_2_main_message_container}>
                <p style={{ marginBottom: 10 }}>Message</p>
                {messages.map(
                  (item: {
                    data: {
                      email: String;
                      name: String;
                      date: String;
                    };
                  }) => {
                    return (
                      <Message
                        key={null}
                        date={item.data.date}
                        email={item.data.email}
                        name={item.data.name}
                      />
                    );
                  }
                )}
              </div>
              <div className={styles.sub_container_2_main_users_container}>
                <p style={{ marginBottom: 10 }}>Log Ins</p>
                {user.map((item: User) => {
                  return (
                    <Logins
                      key={null}
                      city={item.data?.info?.city}
                      flag={item.data?.info.flag}
                      country={item.data?.info.country_name}
                      continent={item.data?.info.continent_name}
                      postal={item.data?.info.postal}
                      date={item.data?.date}
                      userKey={item.key}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
