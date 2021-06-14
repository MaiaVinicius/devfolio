import { useRouter } from "next/router";
import Link from "next/link";
import { FC } from "react";
import XIcon from "./icons/XIcon";
import { useEmitEvent } from "@casper124578/useful/hooks/useEmitEvent";
import styles from "css/nav.module.scss";

const Menu: FC = () => {
  const router = useRouter();
  const is404 = router.pathname !== "/";
  const { dispatch } = useEmitEvent("focusOnContact", true);

  function handleClose() {
    document.getElementById("menu")?.classList.remove(styles.menuNavActive);
    document.getElementById("menu__bg")?.classList.remove(styles.menuBgActive);
    document.body.classList.remove("disable-scroll");
  }

  return (
    <>
      <div onClick={handleClose} id="menu__bg" className={styles.menuBg} />
      <nav id="menu" className={styles.menuNav}>
        <button onClick={handleClose} className={styles.closeMenu}>
          <p className="sr-only">Close menu</p>
          <XIcon />
        </button>

        <div className={styles.menuContent}>
          <div onClick={handleClose} className={styles.menuLinks}>
            <Link href={is404 ? "/" : "#"}>
              <a className={styles.menuLink}>About</a>
            </Link>
            <Link href={is404 ? "/#skills" : "#skills"}>
              <a className={styles.menuLink}>Skills</a>
            </Link>
            <Link href={is404 ? "/#projects" : "#projects"}>
              <a className={styles.menuLink}>Open-source projects</a>
            </Link>
            <Link href={is404 ? "/#timeline" : "#timeline"}>
              <a className={styles.menuLink}>Timeline</a>
            </Link>
            <Link href={is404 ? "/#contact" : "#contact"}>
              <a onClick={dispatch} className={styles.menuLink}>
                Contact
              </a>
            </Link>

            <Link href="/experience">
              <a href="/experience" className={styles.menuLink}>
                Experience
              </a>
            </Link>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
