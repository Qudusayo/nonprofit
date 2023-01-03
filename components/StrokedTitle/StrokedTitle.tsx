import styles from "./StrokedTitle.module.scss";

export default function StrokedTitle({ title }: { title: string }) {
  return (
    <div className={styles.StrokedTitle}>
      <h2>{title}</h2>
      <div className={styles.Stroke}></div>
    </div>
  );
}
