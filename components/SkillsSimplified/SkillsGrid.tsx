import styles from "./SkillsGrid.module.scss";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiGraphql,
  SiPrisma,
  SiSolidity,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
import {
  DiNodejsSmall,
  DiPostgresql,
  DiPython,
  DiGit,
  DiSass,
  DiStackoverflow,
} from "react-icons/di";
import { FaEthereum, FaHardHat } from "react-icons/fa";
import { Skill } from "../Skill";

export function SkillsGrid() {
  return (
    <div className={styles.main_container}>
      <div className={styles.mid_container}>
        <div className={`${styles.container_1} ${styles.container}`}>
          <p className={styles.skill_title}>Technologies</p>
          <div className={styles.row}>
            <Skill name="JavaScript" color="#efd81d">
              <SiJavascript fill="#fff" size={17} />
            </Skill>
            <Skill name="TypeScript" color="#2f74c0">
              <SiTypescript fill="#fff" size={17} />
            </Skill>
            <Skill name="Python" color="#FFDE50">
              <DiPython fill="#fff" size={22} />
            </Skill>
          </div>
          <div className={styles.row}>
            <Skill name="ReactJS" color="#61dbfb">
              <FaReact fill="#fff" size={20} />
            </Skill>
            <Skill name="NextJS" color="#222222">
              <SiNextdotjs fill="#fff" size={20} />
            </Skill>
            <Skill name="NodeJS" color="#88c140">
              <DiNodejsSmall fill="#fff" size={22} />
            </Skill>
          </div>
          <div className={styles.row}>
            <Skill name="Git" color="#e84d31">
              <DiGit fill="#fff" size={22} />
            </Skill>
            <Skill name="GraphQL" color="#E535AB">
              <SiGraphql fill="#fff" size={22} />
            </Skill>
            <Skill name="Prisma" color="#155b84">
              <SiPrisma fill="#fff" size={22} />
            </Skill>
          </div>
        </div>
        <div>
          <div className={`${styles.container_2} ${styles.container}`}>
            <p className={styles.skill_title}>Blockchain / Web3</p>
            <div className={styles.row}>
              <Skill name="Ethereum" color="#7885CA">
                <FaEthereum fill="#fff" size={22} />
              </Skill>
              <Skill name="Solidity" color="#5f5f5f">
                <SiSolidity fill="#fff" size={22} />
              </Skill>
              <Skill name="Hardhat" color="#111111">
                <FaHardHat fill="#a3910c" size={22} />
              </Skill>
            </div>
          </div>
          <div className={`${styles.container_3} ${styles.container}`}>
            <p className={styles.skill_title}>Databases & Others</p>
            <div className={styles.row}>
              <Skill name="Postgres" color="#2F6792">
                <DiPostgresql fill="#fff" size={22} />
              </Skill>
              <Skill name="MongoDB" color="#50ae3f">
                <SiMongodb fill="#fff" size={22} />
              </Skill>
              <Skill name="Firebase" color="#039BE5">
                <SiFirebase fill="#F7A212" size={22} />
              </Skill>
            </div>
            <div className={styles.row}>
              <Skill name="React Native" color="#111111">
                <FaReact fill="#039BE5" size={20} />
              </Skill>
              <Skill name="Sass" color="#C66394">
                <DiSass fill="#fff" size={20} />
              </Skill>
              <Skill name="Stack Overflow" color="#111111">
                <DiStackoverflow fill="#F48024" size={20} />
              </Skill>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
