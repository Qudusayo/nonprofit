import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();

  const isActiveRoute = (route: string): string => {
    return router.pathname === route ? styles.activeRoute : styles.navLink;
  };

  return (
    <nav className={styles.Navbar}>
      <h2>
        <Link href={"/"}>Non-Profit</Link>
      </h2>
      <ul>
        <li>
          <Link href={"/"} className={isActiveRoute("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link href={"/about-us"} className={isActiveRoute("/about-us")}>
            About us
          </Link>
        </li>
        <li>
          <Link href={"/what-we-do"} className={isActiveRoute("/what-we-do")}>
            What we do
          </Link>
        </li>
        <li>
          <Link href={"/media"} className={isActiveRoute("/media")}>
            Media
          </Link>
        </li>
        <li>
          <Link href={"/contact"} className={isActiveRoute("/contact")}>
            Contact
          </Link>
        </li>
        <li>
          <Link href={"/donate"} className={styles.donateButton}>
            Donate
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
