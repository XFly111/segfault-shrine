import { Button } from "../Button/Button";
import styles from "./ResultActions.module.css";

type ResultActionsProps = {
  hasResult: boolean;
  onDrawAgain: () => void;
};

export function ResultActions({
  hasResult,
  onDrawAgain,
}: ResultActionsProps) {
  return (
    <section className={styles.actions}>
      <Button onClick={onDrawAgain} variant="secondary">
        Draw Again
      </Button>
      <Button disabled={!hasResult} variant="secondary">
        Copy Result
      </Button>
      <Button disabled={!hasResult} variant="secondary">
        Screenshot
      </Button>
    </section>
  );
}
