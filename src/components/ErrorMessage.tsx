import styles from "./Error.module.css";

export const ERROR_MESSAGE =
  "An unexpected error has occurred. Please try again or reach out for help.";

export const ErrorMessage = () => {
  return (
    <div className={styles.error}>
      <span>{ERROR_MESSAGE}</span>
    </div>
  );
};
