import { NextPage } from "next";
import experience from "../data/experience";
import Experience from "types/Experience";
import styles from "css/experience.module.scss";
import Seo from "@components/Seo";

const ExperiencePage: NextPage = () => {
  return (
    <>
      <Seo
        title="Experience - Vini Maia"
        keywords={["MaiaVinicius experience", "experience Vini Maia"]}
        url="https://maiavinicius.me/experience"
        description="My experience - Vini Maia"
      />

      <div className={styles.header}>
        <h1>My Experience</h1>
        <p>The list below shows my most active experiences starting from 2018.</p>

        {experience.map((item) => {
          return <ExperienceItem key={item.title} item={item} />;
        })}
      </div>
    </>
  );
};

interface Props {
  item: Experience;
}

export const ExperienceItem: React.FC<Props> = ({ item }: Props) => {
  return (
    <div className={styles.experienceItem}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={item.href}
        className={styles.experienceTitle}
      >
        <h1>{item.title}</h1>
        <p>{item.year}</p>
      </a>
      <div className={styles.experienceDesc}>{item.description}</div>
      <footer className={styles.experienceStackContainer}>
        {item.stack.map((st) => (
          <span key={st} className={styles.experienceStack}>
            {st}
          </span>
        ))}
      </footer>
    </div>
  );
};

export default ExperiencePage;
