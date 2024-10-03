import styles from "./Customer.module.css";

type Props = {
  char: string;
};

export function Avatar({ char }: Props) {
  return (
    <div className={styles.avatar}>
      <span>{char}</span>
    </div>
  );
}
