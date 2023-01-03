import styles from "./BlogDisplayCard.module.scss";

interface BlogDisplayCardInterface {
  imagePath: string;
  title: string;
  description: string;
}

export default function BlogDisplayCard(props: BlogDisplayCardInterface) {
  return (
    <div className={styles.BlogDisplayCard}>
      <img src={props.imagePath} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
