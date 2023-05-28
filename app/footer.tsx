import Link from "next/link";
import Image from "next/image";
import LanguageSelect from "./language-select";

import TwitterLogo from "./twitter.svg";
import YoutubeLogo from "./youtube.svg";
import DiscordLogo from "./discord.svg";
import GithubLogo from "./github.svg";

import styles from "./footer.module.css";

const Footer = () => (
  <div className={styles.background}>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.help}>
          <h1>Get help!</h1>
          <menu>
            <li>
              <Link href="#">Documentation</Link>
            </li>
            <li>
              <Link href="#">Rust Forget (Contributor Documentation)</Link>
            </li>
            <li>
              <Link href="#">Ask a Question on the Users Forum</Link>
            </li>
          </menu>
          <LanguageSelect />
        </div>

        <div>
          <h1>Terms and policies</h1>
          <menu>
            <li>
              <Link href="#">Code of Conduct</Link>
            </li>
            <li>
              <Link href="#">Licenses</Link>
            </li>
            <li>
              <Link href="#">Logo Policy and Media Guide</Link>
            </li>
            <li>
              <Link href="#">Security Disclosures</Link>
            </li>
            <li>
              <Link href="#">Privacy Notice</Link>
            </li>
            <li>
              <Link href="#">All Policies</Link>
            </li>
          </menu>
        </div>

        <div className={styles.social}>
          <h1>Social</h1>
          <menu>
            <li>
              <a rel="noreferrer" href="https://twitter.com/rustlang">
                <Image alt="Twitter icon" src={TwitterLogo} />
              </a>
            </li>
            <li>
              <a
                rel="noreferrer"
                href="https://www.youtube.com/channel/UCaYhcUwRBNscFNUKTjgPFiA"
              >
                <Image alt="Youtube icon" src={YoutubeLogo} />
              </a>
            </li>
            <li>
              <a rel="noreferrer" href="https://discord.gg/rust-lang">
                <Image alt="Discord icon" src={DiscordLogo} />
              </a>
            </li>
            <li>
              <a rel="noreferrer" href="https://github.com/rust-lang">
                <Image alt="Github icon" src={GithubLogo} />
              </a>
            </li>
          </menu>
        </div>
      </div>

      <div className={styles.bottomMessage}>
        <p>
          Maintained by the Rust Team, See a bug? <a href="#">File an issue!</a>
        </p>
        <p>
          Looking for the <a href="#">previous website</a>?
        </p>
        <p>
          (This is a clone made for the sole purpose of learning. All credits
          goes to the creators of the{" "}
          <a rel="noreferrer" target="_blank" href="https://rust-lang.org">
            official website
          </a>
          .)
        </p>
      </div>
    </footer>
  </div>
);

export default Footer;
