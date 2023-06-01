import Link from "next/link";

import styles from "./get-involved.module.css";

const GetInvolved = () => (
  <div className={styles.background}>
    <section className={styles.getInvolved + " sectionDefaults"}>
      <h1 className="highlight">Get involved</h1>
      <div className={styles.container}>
        <article className={styles.readRust}>
          <h1>Read Rust</h1>
          <p>
            We love documentation! Take a look at the books available online, as
            well as key blog posts and userguides.
          </p>
          <Link href="#" className="button blueButton">
            Read the book
          </Link>
        </article>

        <article className={styles.watchRust}>
          <h1>Watch Rust</h1>
          <p>
            The Rust community has a dedicated YouTube channel collecting a huge
            range of presentations and tutorials.
          </p>
          <a
            rel="noreferrer"
            className="button blueButton"
            href="https://www.youtube.com/channel/UCaYhcUwRBNscFNUKTjgPFiA"
          >
            Watch the videos
          </a>
        </article>

        <article className={styles.contributeCode}>
          <h1>Contribute code</h1>
          <p>
            Rust is truly a community effort, and we welcome contribution from
            hobbysts and production users, from newcomers and seasoned
            professionals. Come help us make the Rust experience event better!
          </p>
          <a
            rel="noreferrer"
            className="button blueButton"
            href="https://rustc-dev-guide.rust-lang.org/getting-started.html"
          >
            Read contribution guide
          </a>
        </article>
      </div>
    </section>
  </div>
);

export default GetInvolved;
