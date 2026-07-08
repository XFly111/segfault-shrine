import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.kicker}>
        Occult Debugging System v0.13.3
      </p>
      <h1 className={styles.title}>Segfault Shrine</h1>
      <p className={styles.tagline}>
        Debug the unknown with ritualized nonsense.
      </p>
    </header>
  );
}
