import Hero from "./components/hero";
import WhyRust from "./components/why-rust";
import BuildItInRust from "./components/build-it-in-rust";

import styles from "./page.module.css";

const Page = () => (
  <main className={styles.main}>
    <Hero />
    <WhyRust />
    <BuildItInRust />
  </main>
);

export default Page;
