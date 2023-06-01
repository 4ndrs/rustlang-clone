import Link from "next/link";
import Image from "next/image";

import NpmLogo from "../assets/npm.svg";
import YelpLogo from "../assets/yelp.png";

import styles from "./rust-in-production.module.css";

const RustInProduction = () => (
  <section className={styles.rustInProduction + " sectionDefaults"}>
    <h1 className="highlight">Rust in production</h1>
    <p>
      Hundreds of companies around the world are using Rust in prodcution today
      for fast, low-resource, cross-platform solutions. Software you know and
      love, like{" "}
      <a
        rel="noreferrer"
        href="https://hacks.mozilla.org/2017/08/inside-a-super-fast-css-engine-quantum-css-aka-stylo/"
      >
        Firefox
      </a>
      ,{" "}
      <a
        rel="noreferrer"
        href="https://blogs.dropbox.com/tech/2016/06/lossless-compression-with-brotli/"
      >
        Dropbox
      </a>
      , and{" "}
      <a
        rel="noreferrer"
        href="https://blog.cloudflare.com/cloudflare-workers-as-a-serverless-rust-platform/"
      >
        Cloudflare
      </a>
      , uses Rust.{" "}
      <strong>
        From startups to large corporations, from embedded devices to scalable
        web services, Rust is a great fit.
      </strong>
    </p>

    <figure className={styles.quote}>
      <div>
        <blockquote>
          My biggest compliment to Rust is that it&apos;s boring, and this is an
          amazing compliment.
        </blockquote>
        <figcaption>- Chris Dickinson, Engineer at npm, Inc</figcaption>
      </div>
      <a rel="noreferrer" href="https://www.npmjs.com/">
        <Image alt="npm logo" src={NpmLogo} />
      </a>
    </figure>
    <hr />
    <figure className={styles.quote}>
      <a rel="noreferrer" href="https://www.youtube.com/watch?v=u6ZbF4apABk">
        <Image alt="Yelp logo" src={YelpLogo} />
      </a>
      <div>
        <blockquote>
          All the documentation, the tooling, the community is great - you have
          all the tools to succeed in writing Rust code.
        </blockquote>
        <figcaption>- Antonio Verardi, Infrastructure Engineer</figcaption>
      </div>
    </figure>

    <Link href="#" className="button">
      Learn more
    </Link>
  </section>
);

export default RustInProduction;
