import styles from "./Message.module.scss";
export function Message({
  name,
  email,
  date,
}: {
  name: String;
  email: String;
  date: String;
}) {
  return (
    <div className={styles.container}>
      <p className={styles.container__name}>
        From : {name}, {email}
      </p>
      <p className={styles.container__time}>{date}</p>
    </div>
  );
}
