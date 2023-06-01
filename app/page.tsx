import Hero from "./components/hero";
import WhyRust from "./components/why-rust";
import BuildItInRust from "./components/build-it-in-rust";
import RustInProduction from "./components/rust-in-production";

import styles from "./page.module.css";
import GetInvolved from "./components/get-involved";

const Page = () => (
  <main className={styles.main}>
    <Hero />
    <WhyRust />
    <BuildItInRust />
    <RustInProduction />
    <GetInvolved />
  </main>
);

export default Page;
