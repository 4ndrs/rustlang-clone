import styles from "./why-rust.module.css";

const WhyRust = () => (
  <div className={styles.background}>
    <section className={styles.whyRust}>
      <h1 className="highlight">Why Rust?</h1>

      <div className={styles.container}>
        <article>
          <h1>Performance</h1>
          <p>
            Rust is blazingly fast and memory-efficient: with no runtime or
            garbage collector, it can power performance-critical services, run
            on embedded devices, and esily integrate with other languages.
          </p>
        </article>

        <article>
          <h1>Reliability</h1>
          <p>
            Rust&apos;s rich type system and ownership model guarantee
            memory-safety and thread-safety — enabling you to elminate many
            classes of bugs at compile-time.
          </p>
        </article>

        <article>
          <h1>Productivity</h1>
          <p>
            Rust has great documentation, a friendly compiler with useful error
            messages, and top-noth tooling — an integrated package manager and
            build tool, smart multi-editor support with atuto-completion and
            type inspections, an auto-formatter, and more.
          </p>
        </article>
      </div>
    </section>
  </div>
);

export default WhyRust;
