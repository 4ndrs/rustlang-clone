import { Alfa_Slab_One } from "next/font/google";

import styles from "./hero.module.css";
import Link from "next/link";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400" });

const Hero = () => (
  <div className={styles.background}>
    <section className={styles.hero}>
      <div>
        <h1 className={alfa.className}>Rust</h1>
        <p>
          A language empowering everyone
          <br /> to build reliable and efficient software.
        </p>
      </div>

      <div className={styles.ctaContainer}>
        <Link href="#" className={styles.button}>
          Get started
        </Link>
        <a
          rel="noreferrer"
          href="https://blog.rust-lang.org/2023/04/20/Rust-1.69.0.html"
          className={styles.versionLink}
        >
          Version 1.69.0
        </a>
      </div>
    </section>
  </div>
);

export default Hero;
