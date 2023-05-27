import Link from "next/link";
import Image from "next/image";
import RustLogo from "./rust-logo-blk.svg";
import LanguageSelect from "./language-select";

import styles from "./navbar.module.css";

const NavBar = () => (
  <nav className={styles.container}>
    <Image src={RustLogo} alt="Rust logo" className={styles.logo} />

    <menu className={styles.menu}>
      <Link href="#">Install</Link>
      <Link href="#">Learn</Link>
      <Link href="#">Playground</Link>
      <Link href="#">Tools</Link>
      <Link href="#">Governance</Link>
      <Link href="#">Community</Link>
      <Link href="#">Blog</Link>
    </menu>

    <LanguageSelect />
  </nav>
);

export default NavBar;
