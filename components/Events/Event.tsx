import StrokedTitle from "../StrokedTitle/StrokedTitle";
import EventDisplayCard from "../EventDisplayCard/EventDisplayCard";

import styles from "./Event.module.scss";

export default function Event() {
  return (
    <section className={styles.section}>
      <StrokedTitle title="Events" />
      <div className={styles.sectionEvents}>
        <EventDisplayCard title="Say no to plastic usage and save the planet" />
        <EventDisplayCard title="Weekly cleaning program" />
      </div>
    </section>
  );
}
