import Link from "next/link";
import styles from "./Footer.module.scss";
import React from "react";

interface LinkListInterface {
  title: string;
  routes: { name: string; route: string }[];
}

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <div>
          <h2>
            <Link href={"/"}>Non-Profit</Link>
          </h2>
        </div>
        <div className={styles.FooterLinks}>
          <LinkList
            title="Our team"
            routes={[
              { name: "About us", route: "/about-us" },
              { name: "Team", route: "/team" },
              { name: "What we do", route: "/what-we-do" },
              { name: "Contact", route: "/contact" },
            ]}
          />
          <LinkList
            title="More"
            routes={[
              { name: "Projects", route: "/" },
              { name: "Events", route: "/events" },
              { name: "Donate", route: "/donate" },
              { name: "Blog", route: "/blog" },
            ]}
          />
          <LinkList
            title="Connect"
            routes={[
              { name: "Facebook", route: "#" },
              { name: "Twitter", route: "#" },
              { name: "Instagram", route: "#" },
              { name: "LinkedIn", route: "#" },
            ]}
          />
        </div>
        <div>
          <Subscribe />
        </div>
      </div>
    </footer>
  );
}

const LinkList = ({ title, routes }: LinkListInterface) => {
  return (
    <section className={styles.LinkList}>
      <h2>{title}</h2>
      <ul>
        {React.Children.toArray(
          routes.map((routePath) => (
            <li>
              <Link href={routePath.route}>{routePath.name}</Link>
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

const Subscribe = () => {
  return (
    <form className={styles.Subscribe}>
      <h2>Subscribe to get latest updates</h2>
      <div>
        <input placeholder="Your email" type={"email"} />
        <button type="button">Subscribe</button>
      </div>
    </form>
  );
};
