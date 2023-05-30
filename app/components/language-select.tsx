import styles from "./language-select.module.css";

const LanguageSelect = () => (
  <select className={styles.select} aria-label="Language">
    <option>English (en-US)</option>
  </select>
);

export default LanguageSelect;
