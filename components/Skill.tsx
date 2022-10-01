import styles from "./Skill.module.scss";
import { FaReact } from "react-icons/fa";

interface Props {
  name: string;
  children: JSX.Element;
  color: string;
}

export function Skill({ name, children, color }: Props) {
  return (
    <div className={styles.container} style={{ borderColor: color }}>
      <div className={styles.overlay} style={{ backgroundColor: color }}></div>
      {children}
      <p>{name}</p>
    </div>
  );
}
