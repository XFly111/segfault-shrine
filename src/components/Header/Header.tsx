import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.kicker}>
        ▲ 玄术调试系统 · OCCULT DEBUGGING
      </p>
      <h1 className={styles.title} aria-label="Segfault Shrine">
        <span className={styles.quote}>“</span>
        <span>Segfault</span>
        <span className={styles.dot}>.</span>
        <span>Shrine</span>
        <span className={styles.quote}>”</span>
      </h1>
      <p className={styles.tagline}>
        <span>以仪式化的废话调试未知。</span>
        <span className={styles.taglineDivider}>/</span>
        <span>Debug the unknown with ritualized nonsense.</span>
      </p>
      <div className={styles.rule} aria-hidden="true">
        <span className={styles.ruleLine} />
        <span className={styles.ruleSigil}>✦</span>
        <span className={styles.ruleLine} />
      </div>
    </header>
  );
}
