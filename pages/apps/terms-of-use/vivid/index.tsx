import styles from "./UserPolicy.module.scss";

export default function UserPolicy() {
  return (
    <div className={styles.page}>
      <div>
        <h1>vivid</h1>
      </div>
      <h2 className={styles.heading_policy}>Terms Of Use</h2>
      <h2>vivid &gt; terms of use</h2>
      <p>
        <ul>
          <li>
            We don&apos;t allow posts that contain or promote sexual content or
            profanity, including pornography, or any content or services
            intended to be sexually gratifying. Content that contains nudity may
            be allowed if the primary purpose is educational.
          </li>
          <li>
            We don&apos;t allow content that promotes violence or incites hatred
            against individuals or groups based on race or ethnic origin,
            religion, disability, age, nationality, veteran status, sexual
            orientation, gender, gender identity, or any other characteristic.
          </li>
          <li>
            We don&apos;t allow posts that depict or facilitate gratuitous
            violence or other dangerous activities.
          </li>
          <li>
            We don&apos;t allow posts that contain or facilitate threats,
            harassment, or bullying.
          </li>
          <li>
            We don&apos;t allow posts that facilitate the sale of marijuana or
            marijuana products, tobacco (including e-cigarettes and vape pens),
            explosives, firearms, ammunition, or certain firearms accessories.
          </li>
        </ul>
      </p>
      <h5 className={styles.conclution_para}>
        If your contribution violates any of these policies. The contribution
        will be deleted. And more than one-time violation can lead to permanent
        account suspension.
      </h5>
    </div>
  );
}
