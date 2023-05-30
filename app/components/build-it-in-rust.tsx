import Link from "next/link";
import Image from "next/image";

import CliIcon from "../assets/cli.svg";
import WebAssemblyIcon from "../assets/webassembly.svg";
import NetworkingIcon from "../assets/networking.svg";
import EmbeddedIcon from "../assets/embedded.svg";

import styles from "./build-it-in-rust.module.css";

const BuildItInRust = () => (
  <div className={styles.background}>
    <section className={styles.buildItInRust + " sectionDefaults"}>
      <h1 className="highlight">Build it in Rust</h1>
      <p>
        In 2018, the Rust community decided to improve the programming
        experience for a few distinct domains (see{" "}
        <a
          rel="noreferrer"
          href="https://blog.rust-lang.org/2018/03/12/roadmap.html"
        >
          the 2018 roadmap
        </a>
        ). For these, you can find many high-quality crates and some awesome
        guides on how to get started.
      </p>

      <div className={styles.container}>
        <article>
          <Image alt="terminal" src={CliIcon} />
          <h1>Command Line</h1>
          <p>
            Whip up a CLI tool quickly with Rust&apos;s robust ecosystem. Rust
            helps you maintain your app with confidence and distribute it with
            ease.
          </p>
          <Link href="#" className="button">
            Building tools
          </Link>
        </article>

        <article>
          <Image alt="gear with puzzle piece elements" src={WebAssemblyIcon} />
          <h1>WebAssembly</h1>
          <p>
            Use Rust to supercharge your JavaScript, one module at a time.
            Pulish to npm, bundle with webpack, and you&apos;re off to the
            races.
          </p>
          <Link href="#" className="button">
            Writing web apps
          </Link>
        </article>

        <article>
          <Image alt="a cloud with nodes" src={NetworkingIcon} />
          <h1>Networking</h1>
          <p>
            Predictable performance. Tiny resource footprint. Rock-solid
            reliability. Rust is great for network services.
          </p>
          <Link href="#" className="button">
            Working on servers
          </Link>
        </article>

        <article>
          <Image alt="an embedded device chip" src={EmbeddedIcon} />
          <h1>Embedded</h1>
          <p>
            Targeting low-resource devices? Need low-level control without
            giving up high-level conveniences? Rust has you covered.
          </p>
          <Link href="#" className="button">
            Starting with embedded
          </Link>
        </article>
      </div>
    </section>
  </div>
);

export default BuildItInRust;
