import styles from "./EventDisplayCard.module.scss";

interface EventDisplayCardInterface {
  title: string;
}

function EventDisplayCard(props: EventDisplayCardInterface) {
  return (
    <div className={styles.EventDisplayCard}>
      <div className={styles.EventDisplayCardDate}>
        <h2>23</h2>
        <span>SEP</span>
      </div>
      <div className={styles.EventDisplayCardContent}>
        <div className={styles.EventDisplayCardContentHeader}>
          <span>Next Events</span>
          <div></div>
        </div>
        <h3>{props.title}</h3>
      </div>
      <div className={styles.EventDisplayCardLink}>
        <div>
          <img src="/arrow-right.svg" />
        </div>
      </div>
    </div>
  );
}

export default EventDisplayCard;
