import styles from "./Logins.module.scss";
interface UserProps {
  city: String;
  flag: any;
  date: String;
  country: String;
  postal: String;
  continent: String;
  userKey: String;
}
export function Logins({
  city,
  flag,
  date,
  country,
  continent,
  postal,
  userKey,
}: UserProps) {
  return (
    <div className={styles.container}>
      <div className={styles.container_1}>
        <p className={styles.container_1__name}>City - {city}</p>
        <p className={styles.container_1__time}>{date}</p>
      </div>
      <div className={styles.container_1}>
        <p className={styles.container_1__name}>
          {country}, {continent}, {postal}
        </p>
        <img className={styles.flag} src={flag} />
      </div>
      <p className={styles.key}>{userKey}</p>
    </div>
  );
}
