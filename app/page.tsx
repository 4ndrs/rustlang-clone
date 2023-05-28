import Hero from "./components/hero";
import WhyRust from "./components/why-rust";

import styles from "./page.module.css";

const Page = () => (
  <main className={styles.main}>
    <Hero />
    <WhyRust />
  </main>
);

export default Page;
