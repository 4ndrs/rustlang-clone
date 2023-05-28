import Link from "next/link";
import Image from "next/image";
import RustLogo from "../assets/rust-logo-blk.svg";
import LanguageSelect from "./language-select";

import styles from "./navbar.module.css";

const NavBar = () => (
  <nav className={styles.container}>
    <Image src={RustLogo} alt="Rust logo" className={styles.logo} />

    <menu className={styles.menu}>
      <li>
        <Link href="#">Install</Link>
      </li>
      <li>
        <Link href="#">Learn</Link>
      </li>
      <li>
        <Link href="#">Playground</Link>
      </li>
      <li>
        <Link href="#">Tools</Link>
      </li>
      <li>
        <Link href="#">Governance</Link>
      </li>
      <li>
        <Link href="#">Community</Link>
      </li>
      <li>
        <Link href="#">Blog</Link>
      </li>
    </menu>

    <LanguageSelect />
  </nav>
);

export default NavBar;
