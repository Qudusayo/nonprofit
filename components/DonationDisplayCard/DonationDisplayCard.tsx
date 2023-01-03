import Link from "next/link";

import styles from "./DonationDisplayCard.module.scss";

function DonationDisplayCard() {
  return (
    <div className={styles.DonationDisplayCard}>
      <h2>
        You can contribute to make <br /> the environment greener!
      </h2>
      <div className={styles.DonationDisplayCardLinks}>
        <Link href="/">Join as a volunteer</Link>
        <Link href="/donate">Donate</Link>
      </div>
    </div>
  );
}

export default DonationDisplayCard;
