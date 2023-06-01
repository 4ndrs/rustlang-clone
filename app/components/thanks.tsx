import styles from "./thanks.module.css";

const Thanks = () => (
  <div>
    <section className={styles.thanks + " sectionDefaults"}>
      <h1 className="highlight">Thanks</h1>
      <p>
        Rust would not exist without the generous contributions of time, work,
        and resources from individuals and companies. We are very grateful for
        the support!
      </p>
      <div className={styles.container}>
        <article>
          <h1>Individuals</h1>
          <p>
            Rust is a community project and is very thankful for the many
            community contributions it receives.
          </p>
          <a
            className="button"
            rel="noreferrer"
            href="https://thanks.rust-lang.org/"
          >
            See individual contributors
          </a>
        </article>
        <article>
          <h1>Corporate sponsors</h1>
          <p>
            The Rust project receives support from companies through the Rust
            foundation.
          </p>
          <a
            rel="noreferrer"
            className="button"
            href="https://foundation.rust-lang.org/members"
          >
            See foundation members
          </a>
        </article>
      </div>
    </section>
  </div>
);

export default Thanks;
