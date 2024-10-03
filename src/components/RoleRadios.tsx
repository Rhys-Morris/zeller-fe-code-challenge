import type { SetStateAction } from "react";
import { Role, VALID_CUSTOMER_ROLES } from "../api/customers/schema";
import { titleCase } from "../utils/string";
import styles from "./Roles.module.css";

type Props = {
  selectedRole: Role;
  setSelectedRole: (value: SetStateAction<Role>) => void;
};

export function RoleRadios({ selectedRole, setSelectedRole }: Props) {
  const baseClassName = styles.radio;

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.screenReaderOnly}>Select a role:</legend>
      {VALID_CUSTOMER_ROLES.map((role) => {
        const isSelected = role === selectedRole;
        const className = isSelected
          ? `${baseClassName} ${styles.radioSelected}`
          : baseClassName;

        return (
          <label htmlFor={`${role}-role`} className={className} key={role}>
            <input
              type="radio"
              id={`${role}-role`}
              name="role"
              value={role}
              checked={isSelected}
              onClick={() => setSelectedRole(role)}
              onChange={() => setSelectedRole(role)}
              className={styles.radioInput}
            />
            {titleCase(role)}
          </label>
        );
      })}
    </fieldset>
  );
}
