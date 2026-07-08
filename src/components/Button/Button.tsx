import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  variant?: ButtonVariant;
};

export function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
  variant = "secondary",
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${variant === "primary" ? styles.primary : styles.secondary}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
