import Hero from "./components/hero";
import WhyRust from "./components/why-rust";
import BuildItInRust from "./components/build-it-in-rust";
import RustInProduction from "./components/rust-in-production";
import GetInvolved from "./components/get-involved";
import Thanks from "./components/thanks";

import styles from "./page.module.css";

const Page = () => (
  <main className={styles.main}>
    <Hero />
    <WhyRust />
    <BuildItInRust />
    <RustInProduction />
    <GetInvolved />
    <Thanks />
  </main>
);

export default Page;
