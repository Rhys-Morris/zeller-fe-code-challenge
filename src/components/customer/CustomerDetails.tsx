import { Customer } from "../../api/customers/schema";
import { titleCase } from "../../utils/string";
import styles from "./Customer.module.css";

export function CustomerDetails({
  name,
  role,
}: Pick<Customer, "name" | "role">) {
  return (
    <div className={styles.details}>
      <span className={styles.detailsName}>{name}</span>
      <span className={styles.detailsRole}>{titleCase(role)}</span>
    </div>
  );
}
