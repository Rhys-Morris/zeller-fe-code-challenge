import { Customer } from "../../api/customers/schema";
import styles from "./Customer.module.css";
import { Avatar } from "./Avatar";
import { CustomerDetails } from "./CustomerDetails";

type Props = {
  customer: Customer;
};

export const UNKNOWN_USER_CHAR = "U";

export function CustomerRow({ customer }: Props) {
  const avatarChar =
    customer.name.length > 0 ? customer.name[0] : UNKNOWN_USER_CHAR;

  return (
    <div className={styles.row} data-testid={"customerRow"}>
      <Avatar char={avatarChar} />
      <CustomerDetails name={customer.name} role={customer.role} />
    </div>
  );
}
