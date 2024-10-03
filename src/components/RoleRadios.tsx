import type { SetStateAction } from "react";
import { Role, VALID_CUSTOMER_ROLES } from "../api/customers/schema";
import { titleCase } from "../utils/string";
import styles from "./Roles.module.css";

type Props = {
  selectedRole: Role;
  setSelectedRole: (value: SetStateAction<Role>) => void;
};

const baseClassName = styles.radio;

export function RoleRadios({ selectedRole, setSelectedRole }: Props) {
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
              aria-checked={isSelected}
            />
            {titleCase(role)}
          </label>
        );
      })}
    </fieldset>
  );
}
