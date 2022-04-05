import styles from "./projectcard.module.scss";
import NextLink from "next/link";

interface Props {
  logo: String | any;
  name: String;
  description: String;
  link: String | any;
  tech_stack: String[];
  image: String | any;
  key: String | any;
}
export function ProjectCard(props: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.text_project_name}>
          <img src={props.logo} className={styles.text_project_name_logo} />
          <h3 className={styles.text_project_name_name}>{props.name}</h3>
        </div>
        <div className={styles.text_line} />
        <p className={styles.text_description}>{props.description}</p>
        <p>Used technologies</p>
        <div className={styles.text_line} />
        <div className={styles.text_tech_container}>
          {props.tech_stack?.map((tech_name) => {
            return (
              <div key={null} className={styles.text_tech_container_tech}>
                {tech_name}
              </div>
            );
          })}
        </div>
        <a href={props.link} target={"_blank"} rel={"noreferrer"}>
          <button className={styles.link_btn}>&rarr; link to visit</button>
        </a>
      </div>
      <img src={props.image} className={styles.project_pic} />
    </div>
  );
}
