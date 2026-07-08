import styles from "./ErrorInput.module.css";

type ErrorInputProps = {
  value: string;
  onChange: (nextValue: string) => void;
  isError: boolean;
  isDisabled: boolean;
};

export function ErrorInput({
  value,
  onChange,
  isError,
  isDisabled,
}: ErrorInputProps) {
  return (
    <section className={styles.wrapper}>
      <p className={styles.label}>Paste your error log below</p>
      <textarea
        className={`${styles.input} ${isError ? styles.error : ""}`}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="// Waiting for code sacrifice..."
        disabled={isDisabled}
        spellCheck={false}
      />
      <p className={styles.feedback}>
        {isError ? "[ERROR] No code sacrifice detected." : "The Shrine accepts stack traces, logs, and vague panic."}
      </p>
    </section>
  );
}
